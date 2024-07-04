import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { inject } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';

export const usuariosResolver: ResolveFn<any> = (route, state) => {
  const usuariosService = inject(UsuariosService);
  return usuariosService.getUsuarios()
};


// export const usuariosResolver: ResolveFn<any> = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// )=>{
//   return inject (UsuariosService).getUsuarios();
// }
