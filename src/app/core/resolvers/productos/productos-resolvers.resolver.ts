import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductosService } from '../../../services/productos/productos.service';

export const productosResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
)=>{
  return inject (ProductosService).getProductos();
}
