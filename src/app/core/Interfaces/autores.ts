/**
 * Esto se utiliza para construir los autores en el about
 */
export interface Autor{
    //Atributos genéricos
    id:number;
    name:string;
    surname:string;
    //Insertamos la url de la imagen
    img?:string;
}