import { Observable } from "rxjs";
import { Personaje } from "./personaje";

export interface PersonajesServiceInterface {
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
     * Obtiene todos los personajes de la lista exceptuando los dos primeros(autor 1 y 2 de la pag about)
     * @returns Observable de toda la lista de personajesService menos los 2 primeros
     */
    getAllPerson():Observable<Personaje[]>;
    /**
     * Actualiza los datos de un personaje
     * @returns personaje cambiado
     */
    updatePerson(person:Personaje):Observable<Personaje>;

    /**
     * Borra todos los personajes menos los autores de about
     */
    deleteAll():Observable<void>;
}
