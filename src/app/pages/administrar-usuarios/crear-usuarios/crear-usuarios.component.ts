import { crearUsuarioInterface } from './../../../core/interface/usuario.interface';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { PATH } from '../../../core/enum/path.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuarios.component.html',
  styleUrl: './crear-usuarios.component.css'
})
export class CrearUsuariosComponent implements OnInit{

  usuariosForm: FormGroup;
  private formBuilder = inject(FormBuilder)
  private usuariosService = inject (UsuariosService);
  usuarioSeleccionado: UsuarioModel;
  private router = inject (Router);
  private activateRoutes = inject (ActivatedRoute)

  ngOnInit(): void {
    this.activateRoutes.params.subscribe(({numeroDocumento})=>{
      this.buscarUsuario(numeroDocumento)
    })

    this.usuariosForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required] ],
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
      rol: ['',],
      numeroCelular: ['',],
      peso: ['',],
      fechaNacimiento: ['',],
      password: ['',],
    })
  }
  crearUsuario(){
    const data = this.usuariosForm.value;
    const nuevoUsuario: crearUsuarioInterface = {
      nombre: data.nombre,
      email: data.email,
      tipoDocumento: data.tipoDocumento,
      numeroDocumento: data.numeroDocumento,
      rol: data.rol,
      numeroCelular: data.numeroCelular,
      peso: data.peso,
      fechaNacimiento: data.fechaNacimiento,
      password: data.password
    };
    console.log("Data Crear Usuario", data);

    this.usuariosService
      .crearUsuario(nuevoUsuario)
      .subscribe((resp: any) => {
        Swal.fire("Usuario creado", `${resp.msg}`, 'success')
        this.resetearFormulario()
        // console.log('resp', resp);
      });
  }

  buscarUsuario(numeroDocumento:string){
    if (numeroDocumento !== 'nuevo') {
      this.usuariosService.getUnUsuario(numeroDocumento).subscribe({
        next: (res: any) => {
          const {
            nombre,
            tipoDocumento,
            numeroDocumento,
            email,
            rol,
            peso,
            fechaNacimiento,
          } = res.usuario;

          this.usuarioSeleccionado = res.usuario;

          Swal.fire(
            'Usuario',
            `Se encontró el usuario ${res.usuario.nombre}`,
            'info'
          );

          this.usuariosForm.setValue({
            nombre,
            email,
            tipoDocumento,
            numeroDocumento,
            rol,
            peso,
            fechaNacimiento,
          });
        },

        error: (error: any) => {
          Swal.fire('Error', 'Error al encontrar el usuario', 'error');
        },
      });
    }
  }

  actualizarUsuario(usuario: crearUsuarioInterface){
    const usuarioActualizar: UsuarioModel = {
      _id: this.usuarioSeleccionado._id,
      nombre: usuario.nombre,
      email: usuario.email,
      tipoDocumento: usuario.tipoDocumento,
      numeroDocumento: usuario.numeroDocumento,
      rol: usuario.rol ? usuario.rol : '',
      peso: usuario.peso,
      fechaNacimiento: usuario.fechaNacimiento,
    };

    this.usuariosService.actualizarUsuario(usuarioActualizar).subscribe({
      next: (res: any) => {
        Swal.fire(
          'Usaurio Actualizado',
          `El usuario ${this.usuarioSeleccionado.nombre} ha sido actualizado con éxito`,
          'success'
        );
        this.router.navigateByUrl(PATH.USUARIO);
      },
      error: (error) => {
        Swal.fire('Error', `${error.error.msg}`, 'error');
      },
    });
  }

  resetearFormulario(){
    this.usuariosForm.reset();
  }

}

