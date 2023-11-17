import { Observable } from "rxjs";
import { Arena } from "./arenas";

export interface ArenasServiceInterface {
    /**
     * Obtiene todas las arenas de la lista
     * @returns Observable de toda la lista de arenasService
     */
    getAllArenas():Observable<Arena[]>;
    /**
     * Obtiene una arena de la lista
     * @returns Observable de la arena obtenida
     */
    getArena(id:number):Observable<Arena>;
    /**
     * Añade una arena a la lista del servicio de arenas 
     * @returns Observable de la arena añadida
     */
    addArena(arena:Arena):Observable<Arena>;
    /**
     * Borra una arena de la lista del servicio de arenas
     * @returns Observable de la arena borrada
     */
    delArena(arena:Arena):Observable<Arena>;
    /**
     * Actualiza los datos de una arena
     * @returns Observable de la arena actualizada
     */
    updateArena(arena:Arena):Observable<Arena>;
}