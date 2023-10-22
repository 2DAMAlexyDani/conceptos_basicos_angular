import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personaje } from 'src/app/shared/Interfaces/personaje';
import { PersonajesServiceInterface } from 'src/app/shared/Interfaces/personajes-service-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService implements PersonajesServiceInterface{
  private _personajes:BehaviorSubject<Personaje[]> = new BehaviorSubject<Personaje[]>([]);
  personajes$:Observable<Personaje[]> = this._personajes.asObservable();

  constructor() {}
  getAllPerson(): Observable<Personaje[]> {
    return new Observable(observer =>{
      var characters:Personaje[] =[
        {id:0,name:"Daniel",surname:"Jódar Barbero",esAutor:true},
        {id:1,name:"Alejandro",surname:"Giráldez Guerrero",esAutor:true},
        {id:2,name:"Esqueletos",calidad:1,elixir:1,hp:81,daño:81,esAutor:false},
        {id:3,name:"Duendes",calidad:1,elixir:2,hp:202,daño:120,esAutor:false},
        {id:4,name:"Bruja",calidad:3,elixir:5,hp:838,daño:134,esAutor:false},
        {id:5,name:"Minero",calidad:4,elixir:3,hp:1210,daño:193,esAutor:false},
        {id:6,name:"Princesa",calidad:4,elixir:3,hp:261,daño:169,esAutor:false},
        {id:7,name:"Bola de Fuego",calidad:2,elixir:4,daño:689,esAutor:false},
        {id:8,name:"Mago",calidad:2,elixir:5,hp:720,daño:281,esAutor:false},
        {id:9,name:"Arqueras",calidad:1,elixir:3,hp:304,daño:107,esAutor:false},
        {id:10,name:"P.E.K.K.A.",calidad:3,elixir:7,hp:3760,daño:816,esAutor:false}
      ]
      observer.next(characters);
      this._personajes.next(characters);
      observer.complete();
    });
  }
  deleteAll(): Observable<void> {
    return new Observable(observer=>{
      this._personajes.next([]);
      observer.next();
      observer.complete();
    })
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
      else observer.error('El usuario ya esta favorito');
      observer.complete();
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
  updatePerson(person: Personaje): Observable<Personaje> {
    return new Observable(observable=>{
      var personajes = [...this._personajes.value];
      var index = personajes.findIndex(p => p.id == person.id);
      if(index>=0){
        personajes[index]=person;
        observable.next(person);
        this._personajes.next(personajes);
      }
      observable.complete();
    })
  }
}
