import { ProductosComponent } from './pages/administrar-productos/productos/productos.component';
import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { PATH } from './core/enum/path.enum';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { CrearProductosComponent } from './pages/administrar-productos/crear-productos/crear-productos.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
  path: PATH.HOME,
  title:'Home',
  children:[
    {
      path:PATH.INICIO,
      title:'Inicio',
      component: InicioComponent
    },
    {
      path: PATH.LISTA,
      title:'listaPersonas',
      component: ListaComponent
    },
    {
      path: PATH.IMAGEN,
      title:'imagenes',
      component: ImagenesComponent
    },
    {
      path: PATH.CONTACTO,
      title:'contacto',
      component: ContactoComponent
    },
    {
      path: PATH.ACERCADE,
      title:'¿Quienes somos?',
      component: AcercaDeComponent
    },
    {
      path: PATH.USUARIO,
      title:'Usuarios',
      component: UsuariosComponent
    },
    {
      path: PATH.PRODUCTOS,
      title:'Productos',
      component: ProductosComponent
    },
    {
      path: PATH.CREARPRODUCTOS,
      title:'Productos',
      component: CrearProductosComponent
    },
    {
      path: PATH.LISTATAREAS,
      title:'Lista de tareas',
      component: ListaTareasComponent
    },
  ]
},
];
