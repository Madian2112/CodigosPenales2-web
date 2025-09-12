export interface Articulo {
    numero: string;
    texto: string;
  }
  
  export interface Seccion {
    tituloSeccion: string;
    articulos: Articulo[];
  }
  
  export interface Titulo {
    secciones: Seccion[];
  }
  
  export interface Codigo {
    id: string;
    titulo: string;
    estructura: Titulo[];
  }