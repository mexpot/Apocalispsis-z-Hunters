

export interface Detalle {
  daño: number;
  descripcion: string;
  imagen: string;
  nombre: string;
  salud: number;
  velocidad: number;
}

export interface InfGeneral {
  text: string; // Información adicional
}

export interface RespuestaDetalle {
  data: Detalle; // Detalle del personaje
  support: InfGeneral; // Información adicional
}


export interface Personajes {
  id: string;
  data: Personaje; // Un array de personajes
}

export interface Personaje {
  id: string;
  dano: number; // Usamos "daño" con la "ñ" para coincidir con el JSON
  descripcion: string;
  imagen: string; // Representa la URL de la imagen
  nombre: string;
  salud: number;
  velocidad: number;
}

export interface Mapa {
  descripcion: string; // Descripción del mapa
  imagen: string;      // URL de la imagen del mapa
  nombre: string;      // Nombre del mapa
}

export interface MapasResponse {
  datas: Mapa[]; // Lista de mapas proporcionados por la API
}