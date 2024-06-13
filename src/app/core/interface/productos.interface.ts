export interface ProductosInterface {
  nombre: string;
  sku: string;
  cantidad: number;
  precio: number;
  createdAt: Date;
}

export interface CrearProductoInterface {
      nombre: string;
      sku: string,
      cantidad: number,
      precio: number,
      distribuidor: distribuidorInterface
}

export interface distribuidorInterface{
  nit: string,
  razonSocial:string,
  telefono: number,
  direccion: string
}

