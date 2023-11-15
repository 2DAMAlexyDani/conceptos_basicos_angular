import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Arena } from '../Interfaces/arenas';
import { ArenasServiceInterface } from '../Interfaces/arenas-service-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArenasService implements ArenasServiceInterface{

  private _arenas:BehaviorSubject<Arena[]> = new BehaviorSubject<Arena[]>([]);
  arenas$:Observable<Arena[]> = this._arenas.asObservable();

  constructor(
    private http:HttpClient
    ) { }
  
  getAllArenas(): Observable<Arena[]> {
    return this.http.get<Arena[]>(environment.URL_BASE+'arenas').pipe(tap((arenas:Arena[])=>{
      this._arenas.next(arenas);
    }))
  }

  getArena(id: number): Observable<Arena> {
    return this.http.get<Arena>(environment.URL_BASE+`arenas/${id}`);
  }

  addArena(arena: Arena): Observable<Arena> {
    return this.http.post<Arena>(environment.URL_BASE + 'arenas/', arena)
      .pipe(tap((_) => {
        this.getAllArenas().subscribe();
      })
    );
  }

  updateArena(arena: Arena): Observable<Arena> {
    return new Observable<Arena>(observer=>{
      this.http.patch<Arena>(environment.URL_BASE+`arenas/${arena.id}`, arena).subscribe(_=>{
        this.getAllArenas().subscribe(_=>{
          this.getArena(arena.id).subscribe(_arena=>{
            observer.next(_arena);
          })
        })
      })
    })
  }

  delArena(arena: Arena): Observable<Arena> {
    return this.http.delete<Arena>(environment.URL_BASE + `arenas/${arena.id}`)
      .pipe(tap(async (_) => {
        this.getAllArenas().subscribe();
      })
    );
  }
}
