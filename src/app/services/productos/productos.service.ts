import { CrearProductoInterface } from './../../core/interface/productos.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoModel } from '../../core/models/productos.model';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpClient: HttpClient) {}

  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; verProductos: ProductoModel[] }>(`${base_url}/productos`)
      .pipe(map((respuesta) => respuesta.verProductos));
  }

  crearProductos(producto:CrearProductoInterface){
    return this.httpClient.post(`${base_url}/productos`, producto)
  }
}
