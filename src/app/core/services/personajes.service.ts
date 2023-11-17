import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Personaje } from 'src/app/core/Interfaces/personaje';
import { PersonajesServiceInterface } from 'src/app/core/Interfaces/personajes-service-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService implements PersonajesServiceInterface {
  private _personajes: BehaviorSubject<Personaje[]> = new BehaviorSubject<
    Personaje[]
  >([]);
  personajes$: Observable<Personaje[]> = this._personajes.asObservable();

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

  addPerson(person: Personaje): Observable<Personaje> {
    return this.http
      .post<Personaje>(environment.URL_BASE + 'personajes/', person)
      .pipe(
        tap((_) => {
          this.getAllPerson().subscribe();
        })
      );
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

  delPerson(person: Personaje): Observable<Personaje> {
    return this.http
      .delete<Personaje>(environment.URL_BASE + `personajes/${person.id}`)
      .pipe(
        tap(async (_) => {
          this.getAllPerson().subscribe();
        })
      );
  }
}
