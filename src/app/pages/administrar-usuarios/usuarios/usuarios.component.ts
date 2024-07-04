import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { TablaComponent } from '../../../components/tabla/tabla.component';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { PersonaInterface } from '../../../core/interface/persona.interface';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PATH } from '../../../core/enum/path.enum';
import { infoUsuarioInterface } from '../../../core/interface/usuario.interface';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit, OnDestroy{

  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacionUsuarios: UsuarioModel;
  usuariosService = inject(UsuariosService);
  private activatedRoute = inject(ActivatedRoute)
  usuariosSubscription: Subscription
  private router = inject(Router);
  dataUsuario: infoUsuarioInterface[]=[]

  ngOnInit(): void {
    this.usuariosSubscription =
    this.activatedRoute.data.subscribe(({usuarios})=>{
      this.usuarios = usuarios.verUsuarios
      this.dataUsuario = this.usuarios.map((usuario)=>this.transformacionData(usuario))
    })
    this.obtenerColumnas(this.dataUsuario);
    // this.usuariosService.getUsuarios().subscribe((resp:any)=>{
    //   this.usuarios = resp.verUsuarios;
    //   this.obtenerColumnas(this.usuarios);

      // console.log("usuarios de la api2",resp);
      console.log("usuarios de la api",this.usuarios);
    // });

    // console.log("obtener columnas", this.usuarios);
  }

  ngOnDestroy(): void {
    this.usuariosSubscription?.unsubscribe();
  }

  obtenerColumnas(usuarios:infoUsuarioInterface[]) {
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

  creacionClientes(){
    this.router.navigateByUrl(`${PATH.CREARUSUARIOS}/nuevo`)
  }

  transformacionData(usuario: UsuarioModel): infoUsuarioInterface{
      const data: infoUsuarioInterface = {
        nombre: usuario.nombre,
        email: usuario.email,
        tipoDocumento: usuario.tipoDocumento,
        numeroDocumento: usuario.numeroDocumento,
        rol: usuario.rol,
        numeroCelular: usuario.numeroCelular,
        peso: usuario.peso,
        fechaNacimiento: usuario.fechaNacimiento
      }
      return data
  }

  editarUsuario(numeroDocumento:number){
    this.router.navigateByUrl(`${PATH.CREARUSUARIOS}/${numeroDocumento}`)
  }
}
