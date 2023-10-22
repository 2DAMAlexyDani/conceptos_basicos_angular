/**
 * Esto se utiliza para construir los personajes en cada carta 
 * y los autores en el about
 */
export interface Personaje{
  //Atributos genéricos
  id:number;
  name:string;
  esAutor:boolean;
  //Atributo autores
  surname?:string;
  //Atributo cartas
  //1:Comun,2:Especial,3:Épica,4:Legendaria
  calidad?:number;
  elixir?:number;
  hp?:number;
  daño?:number;
}