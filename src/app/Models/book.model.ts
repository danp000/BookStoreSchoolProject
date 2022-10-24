import { Cobertura } from "../Interfaces/cobertura.interface";

export class Book {

  constructor(
    public titulo: string,
    public escritor: string,
    public cobertura: Cobertura[],
    public precios: string[],
    public idioma?: string,
    public isbn?: string,
    public editor?: string,
    public lanzamiento?: string,
    public total?: number[],
    public paginas?: number, 
    public img?: string,
    public resumen?: string,
  ) {}

  // get imagenUrl() {
  //   if ( this.img?.includes('https') ) {
  //     return this.img;
  //   }
  //   if ( this.img ) {
  //     return null;
  //     // return `${ api_url }/subir/usuarios/${ this.img }`;
  //   }
  //   return null;
  //   // return `${ api_url }/subir/usuarios/no-image`;
  // }
}
