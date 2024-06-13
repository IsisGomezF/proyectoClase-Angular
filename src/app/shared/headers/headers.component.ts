import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../menu/menu';
import { MenuInfoInterface } from '../../core/interface/menu-info.interface';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent implements OnInit  {
  menuItems:MenuInfoInterface[]=[];
  private usuarioService = inject(UsuariosService)

  ngOnInit(): void {
    this.menuItems = MenuRoutes
    // console.log(this.menuItems)
  }

  cerrarSesion(){
    this.usuarioService.logout();
  }
}
