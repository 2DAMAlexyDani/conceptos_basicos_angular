/**
 * Esto se utiliza para construir los personajes en cada carta
 */
export interface Personaje{
  //Atributos genéricos
  id:number;
  name:string;
  //Atributo cartas
  calidad:number; //1:Comun,2:Especial,3:Épica,4:Legendaria
  elixir:number;
  hp:number;
  damage:number;
  //Arena donde se desbloquea la carta
  arena:number;
  //Insertamos la url de la imagen
  img?:string;
}