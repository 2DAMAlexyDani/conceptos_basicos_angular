/**
 * Esto se utiliza para construir los personajes en cada carta
 */
export interface Personaje{
  //Atributos genéricos
  id:number;
  name:string;
  //Atributo cartas
  //1:Comun,2:Especial,3:Épica,4:Legendaria
  calidad?:number;
  elixir?:number;
  hp?:number;
  damage?:number;
  //Insertamos la url de la imagen
  img?:string;
}