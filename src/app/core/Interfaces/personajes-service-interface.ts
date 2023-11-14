import { Observable } from "rxjs";
import { Personaje } from "./personaje";

export interface PersonajesServiceInterface {
    /**
     * Obtiene todos los personajes de la lista
     * @returns Observable de toda la lista de personajesService
     */
    getAllPerson():Observable<Personaje[]>;
    /**
     * Obtiene un personaje de la lista
     * @returns Observable del personaje obtenido
     */
    getPerson(id:number):Observable<Personaje>;
    /**
     * Añade un personaje a la lista del servicio de personajes 
     * @returns Observable del personaje añadido
     */
    addPerson(person:Personaje):Observable<Personaje>;
    /**
     * Borra un personaje de la lista del servicio de personajes
     * @returns Observable del personaje borrado
     */
    delPerson(person:Personaje):Observable<Personaje>;
    /**
     * Actualiza los datos de un personaje
     * @returns Observable del personaje actualizado
     */
    updatePerson(person:Personaje):Observable<Personaje>;
}