import { UsuariosService } from './../../services/usuarios/usuarios.service';
import { TablaComponent } from './../../components/tabla/tabla.component';
import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../core/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit{
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacionUsuarios: UsuarioModel;
  usuariosService = inject(UsuariosService);

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe((resp:any)=>{
      this.usuarios = resp.verUsuarios;
      this.obtenerColumnas(this.usuarios);

      // console.log("usuarios de la api2",resp);
      // console.log("usuarios de la api",this.usuarios);
    });

    // console.log("obtener columnas", this.usuarios);
  }

  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
      // console.log(this.columnas);
    }
  }
  recibirInformacion(data: UsuarioModel) {
    this.informacionUsuarios = data;
    Swal.fire({
      title: `Usuario ${data.nombre}`,
      html: `Nombre: ${data.nombre} <br>
      Fecha Nacimiento: ${data.fechaNacimiento} <br>
      Tipo Documento: ${data.tipoDocumento} <br>
      Numero Documento: ${data.numeroDocumento} <br>
      Numero Celular: ${data.numeroCelular} <br>
      Email: ${data.email} <br>
      Peso: ${data.peso} <br>
      `,
    });
    // console.log('Componente padre info usuarios', this.informacionUsuarios);
  }
}
