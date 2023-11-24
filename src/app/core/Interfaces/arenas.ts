/**
 * Esto se utiliza para construir las arenas donde se desbloquean las cartas
 */
export interface Arena {
    id:number;
    name:string;
    trofeos:number;
    img?:string;
    personajes:any[];
}
