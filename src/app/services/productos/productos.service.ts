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

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers:{
        'x-token':this.token
      }
    }
  }
  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; verProductos: ProductoModel[] }>(`${base_url}/productos`, this.headers)
      .pipe(map((respuesta) => respuesta.verProductos));
  }

  getUnProducto(id:string){
    return this.httpClient
      .get<{ ok: boolean; verProducto: ProductoModel[] }>(`${base_url}/productos/${id}`, this.headers)
      .pipe(map((respuesta) => respuesta.verProducto));
  }

  crearProductos(producto:CrearProductoInterface){
    return this.httpClient.post(`${base_url}/productos`, producto, this.headers)
  }

  actualizarProducto(producto:ProductoModel){
    return this.httpClient.put(`${base_url}/productos${producto._id}`,
    producto,
    this.headers
    )
  }

  eliminarProducto(id:string){
    return this.httpClient.delete(`${base_url}/productos/${id}`,
      this.headers
    );
  }
}


