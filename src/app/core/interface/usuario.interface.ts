export interface crearUsuarioInterface {
  nombre: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  rol?: string;
  numeroCelular?: number;
  peso?: string;
  fechaNacimiento?: Date;
  password?: string;
}

export interface infoUsuarioInterface {
  nombre: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  rol?: string;
  numeroCelular?: number;
  peso?: string;
  fechaNacimiento?: Date;
}
