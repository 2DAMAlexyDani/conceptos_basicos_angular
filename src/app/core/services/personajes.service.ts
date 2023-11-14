import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Personaje } from 'src/app/core/Interfaces/personaje';
import { PersonajesServiceInterface } from 'src/app/core/Interfaces/personajes-service-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonajesService implements PersonajesServiceInterface{
  private _personajes:BehaviorSubject<Personaje[]> = new BehaviorSubject<Personaje[]>([]);
  personajes$:Observable<Personaje[]> = this._personajes.asObservable();

  constructor(
    private http:HttpClient
    ) {}

  getAllPerson(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(environment.URL_BASE+'personajes').pipe(tap((personajes:Personaje[])=>{
      this._personajes.next(personajes);
    }))
  }

  getPerson(id:number):Observable<Personaje>{
    return this.http.get<Personaje>(environment.URL_BASE+`personajes/${id}`);
  }

  addPerson(person:Personaje): Observable<Personaje> {
    var personajes = [...this._personajes.value];
    return new Observable(observer=>{
      var exist = personajes.find(p=>p.id==person.id)
      if(!exist){
        personajes.push(person);
        observer.next(person);
        this._personajes.next(personajes);
      }
      else {
        observer.error('El personaje ya está creado');
      }
    observer.complete();
    })
  }

  updatePerson(person: Personaje): Observable<Personaje> {
    return new Observable<Personaje>(observer=>{
      this.http.patch<Personaje>(environment.URL_BASE+`personajes/${person.id}`, person).subscribe(_=>{
        this.getAllPerson().subscribe(_=>{
          this.getPerson(person.id).subscribe(_person=>{
            observer.next(_person);
          })
        })
      })
    })
  }

  delPerson(person:Personaje): Observable<Personaje> {
    var _person = person;
    return new Observable<Personaje>(observer=>{
      var personajes = [...this._personajes.value];
      var index = personajes.findIndex(p=>p.id == person.id);
      if(index>=0){
        personajes=[...personajes.slice(0,index),...personajes.slice(index+1)]
        this._personajes.next(personajes);
        observer.next(person);
      }
    observer.complete();
    })
  }
}