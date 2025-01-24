export type estilosButton = {
  verde: string;
  azul: string;
  blanco: string;
};

export interface Yacimiento {
  id: number;
  nombre: string;
  descripcion: string;
  imagen?: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
}

export interface Valor {
  texto: string;
  imagen: string;
  id: number;
}
