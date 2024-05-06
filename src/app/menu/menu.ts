import { ListaTareasComponent } from './../pages/lista-tareas/lista-tareas.component';
import { PATH } from "../core/enum/path.enum";
import { MenuInfoInterface } from "../core/interface/menu-info.interface";

export const MenuRoutes: MenuInfoInterface[]=[
  {
    path: PATH.INICIO,
    tittle:"Inicio",
    icon:"fa-solid fa-house",
    classCss:"",
    subMenu:[],
  },
  {
    path: PATH.LISTA,
    tittle:"Lista",
    icon:"fa fa-user",
    classCss:"",
    subMenu:[{
      path: PATH.IMAGEN,
      tittle:"Imagenes",
      icon:"",
      classCss:"",
      subMenu:[],
    },],
  },
  {
    path: PATH.USUARIO,
    tittle:"Usuario",
    icon:"",
    classCss:"",
    subMenu:[],
  },
  {
    path: PATH.LISTATAREAS,
    tittle:"Lista Tareas",
    icon:"",
    classCss:"",
    subMenu:[],
  },
  {
    path: PATH.PRODUCTOS,
    tittle:"Productos",
    icon:"",
    classCss:"",
    subMenu:[],
  },
  {
    path: PATH.CONTACTO,
    tittle:"Contacto",
    icon:"",
    classCss:"",
    subMenu:[],
  },
  {
    path: PATH.ACERCADE,
    tittle:"Acerca de",
    icon:"",
    classCss:"",
    subMenu:[],
  }
]
