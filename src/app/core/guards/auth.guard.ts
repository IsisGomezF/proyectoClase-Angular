import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { tap } from 'rxjs';
import { PATH } from '../enum/path.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const usuariosServices =inject(UsuariosService);
  const router = inject (Router)

  return  usuariosServices.validateToken().pipe(
    tap((isAutenticado)=>{
      if(!isAutenticado){
        router.navigateByUrl(PATH.LOGIN)
      }
    })
  )
};
