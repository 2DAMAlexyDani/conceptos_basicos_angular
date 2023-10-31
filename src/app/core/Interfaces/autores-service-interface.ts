import { Observable } from "rxjs";
import { Autores } from "./autores";

export interface AutoresServiceInterface {
    /*
     * Obtiene todos los autores de la lista
     * @returns Observable de toda la lista de AutoresService
     */
    getAllPerson():Observable<Autores[]>;
}