import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Autor } from 'src/app/core/Interfaces/autores';
import { AutoresServiceInterface } from '../Interfaces/autores-service-interface';

@Injectable({
  providedIn: 'root'
})
export class AutoresService implements AutoresServiceInterface{
  private _autores:BehaviorSubject<Autor[]> = new BehaviorSubject<Autor[]>([]);
  personajes$:Observable<Autor[]> = this._autores.asObservable();

  constructor() {}
  getAllPerson(): Observable<Autor[]> {
    return new Observable(observer =>{
      var autores:Autor[] =[
        {id:0,name:"Daniel",surname:"Jódar Barbero",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTUAjdwL-NGBoQpbNQMVeHv63keytXAC8oQ&usqp=CAU"},
        {id:1,name:"Alejandro",surname:"Giráldez Guerrero",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTUAjdwL-NGBoQpbNQMVeHv63keytXAC8oQ&usqp=CAU"}
      ]
      observer.next(autores);
      this._autores.next(autores);
      observer.complete();
    });
  }
}
