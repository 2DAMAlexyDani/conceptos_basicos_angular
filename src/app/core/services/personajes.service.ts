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
  updatePerson(person: Personaje): Observable<Personaje> {
    throw new Error('Method not implemented.');
  }
  deleteAll(): Observable<void> {
    throw new Error('Method not implemented.');
  }
  addPerson(): Observable<Personaje> {
    
    throw new Error('Method not implemented.');
  }
  delPerson(): Observable<Personaje> {
    throw new Error('Method not implemented.');
  }
  getAllPerson(): Observable<Personaje[]> {
    throw new Error('Method not implemented.');
  }
}
