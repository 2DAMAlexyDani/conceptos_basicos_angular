/**
 * Esto se utiliza para construir los personajes en cada carta 
 * y los autores en el about
 */
export interface Personaje{
  id:number;
  name:string;
  surname?:string;
  esAutor:boolean;
}