export interface ArticuloProps {
    numero: string;
    texto: string;
  }
  
  export interface Seccion {
    tituloSeccion: string;
    articulos: ArticuloProps[];
  }
  
  export interface Titulo {
    secciones: Seccion[];
  }
  
  export interface Articulo {
    id: string;
    titulo: string;
    estructura: Titulo[];
  }