import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, lastValueFrom, map, tap, zip } from 'rxjs';
import { Arena } from '../Interfaces/arenas';
import { ArenasServiceInterface } from '../Interfaces/arenas-service-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PersonajesService } from './personajes.service';

@Injectable({
  providedIn: 'root'
})
export class ArenasService implements ArenasServiceInterface{

  private _arenas:BehaviorSubject<Arena[]> = new BehaviorSubject<Arena[]>([]);
  arenas$:Observable<Arena[]> = this._arenas.asObservable();

  constructor(
    private personajesSvc:PersonajesService,
    private http:HttpClient
  ) { }
  
  public query(q:string):Observable<Arena[]>{
    // Si coincide el tipo de datos que recibo con mi interfaz
    return this.http.get<Arena[]>(environment.URL_BASE+'/arenas?q='+q);
  }

  getAllArenas(): Observable<Arena[]> {
    return new Observable<Arena[]>(observer=>{
      this.http.get<Arena[]>(environment.URL_BASE+'arenas').subscribe(async (arenas:Arena[])=>{
        let promises: Promise<void>[] = [];

        arenas.forEach( arena=>{
          const promise = new Promise<void>(async (resolve, reject)=>{
            if(arena.personajes?.length>0){
              let personajes = arena.personajes.map(personaje=>{
                return this.personajesSvc.getPerson(personaje);
              });
              arena.personajes.length = 0;
              let results = await lastValueFrom(zip(personajes));
              results.forEach(r=>arena.personajes.push(r));
            }
            resolve();
          })
          promises.push(promise);
        });
        try {
          // Esperar a que todas las promesas se resuelvan
          await Promise.all(promises);
          observer.next(arenas);  
          this._arenas.next(arenas);
        } catch (error) {
          console.error("Ocurrió un error durante las operaciones asíncronas:", error);
        }
        
      })});
  }

  getArena(id: number): Observable<Arena> {
    return new Observable<Arena>(observer=>{
      this.http.get<Arena>(environment.URL_BASE+`arenas/${id}`).subscribe(arena=>{
        let personajes = arena.personajes.map(personaje=>{
          return this.personajesSvc.getPerson(personaje);
        });
        arena.personajes.length = 0;
        zip(personajes).pipe(map(results=>{
          results.forEach(r=>arena.personajes.push(r));
          observer.next(arena);
        }));
        
      })});
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
