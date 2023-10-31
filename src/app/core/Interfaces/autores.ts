/**
 * Esto se utiliza para construir los autores en el about
 */
export interface Autores{
    //Atributos genéricos
    id:number;
    name:string;
    //Atributo autores
    surname:string;
    //Insertamos la url de la imagen
    img?:string;
  }