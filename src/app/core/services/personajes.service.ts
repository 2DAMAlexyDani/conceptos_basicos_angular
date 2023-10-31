import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personaje } from 'src/app/core/Interfaces/personaje';
import { PersonajesServiceInterface } from 'src/app/core/Interfaces/personajes-service-interface';

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
        {id:0,name:"Esqueletos",calidad:1,elixir:1,hp:81,damage:81,img:"https://apiwar.com/ups/uploads/26000010.png"},
        {id:1,name:"Duendes",calidad:1,elixir:2,hp:202,damage:120,img:"https://wiki.clashofroyale.ru/client/img/cards/goblins.png"},
        {id:2,name:"Bruja",calidad:3,elixir:5,hp:838,damage:134,img:"https://cdn.statsroyale.com/images/cards/full/witch.png"},
        {id:3,name:"Minero",calidad:4,elixir:3,hp:1210,damage:193,img:"https://wiki.clashofroyale.ru/client/img/cards/miner.png"},
        {id:4,name:"Princesa",calidad:4,elixir:3,hp:261,damage:169,img:"https://wiki.clashofroyale.ru/client/img/cards/princess.png"},
        {id:5,name:"Bola de Fuego",calidad:2,elixir:4,hp:0,damage:689,img:"https://wiki.clashofroyale.ru/client/img/cards/fireball.png"},
        {id:6,name:"Mago",calidad:2,elixir:5,hp:720,damage:281,img:"https://cdn.statsroyale.com/images/cards/full/wizard.png"},
        {id:7,name:"Arqueras",calidad:1,elixir:3,hp:304,damage:107,img:"https://cdn.statsroyale.com/images/cards/full/archer.png"},
        {id:8,name:"P.E.K.K.A.",calidad:3,elixir:7,hp:3760,damage:816,img:"https://cdn.statsroyale.com/images/cards/full/pekka.png"}
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
  getPerson(person:Personaje):Observable<Personaje>{
    var personajes = [...this._personajes.value];
    return new Observable(observer=>{
      var personaje = personajes.find((p)=>p.id==person.id);
      if(personaje)
          observer.next(person);
        else
          observer.error("Ha ocurrido un error en la busqueda del personaje , no existe el usuario en la lista");
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
