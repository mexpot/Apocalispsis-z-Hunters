

export interface Detalle {
  apellido: string;
  armas: number;
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
  apellido: string;
  armas: number;
  dano: number; // Usamos "daño" con la "ñ" para coincidir con el JSON
  descripcion: string;
  imagen: string; // Representa la URL de la imagen
  nombre: string;
  salud: number;
  velocidad: number;
}
