import { TablaComponent } from './../../components/tabla/tabla.component';
import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: PersonaInterface[] = [];
  columnas: string[] = [];
  informacionUsuarios: any;

  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: 'Juan Perez',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'Cedula ciudania',
        numeroDocumento: '123456',
        numeroCelular: 123456,
        email: 'correo@gmail.com',
        peso: '70kg',
      },
      {
        nombre: 'Maria Gomez',
        fechaNacimiento: new Date('2023-05-05'),
        tipoDocumento: 'Cedula ciudania',
        numeroDocumento: '456789',
        numeroCelular: 4567,
        email: 'correo@gmail.com',
      },
      {
        nombre: 'Juanito Perez',
        fechaNacimiento: new Date('2023-06-05'),
        tipoDocumento: 'Cedula ciudania',
        numeroDocumento: '7894',
        numeroCelular: 7894,
        email: 'correo@gmail.com',
        peso: '70kg',
      },
      {
        nombre: 'Diana Diaz',
        fechaNacimiento: new Date('2023-07-05'),
        tipoDocumento: 'Cedula ciudania',
        numeroDocumento: '564123',
        numeroCelular: 56123,
        email: 'correo@gmail.com',
        peso: '70kg',
      },
    ];
    this.obtenerColumnas(this.usuarios);
    console.log(this.usuarios);
  }
  obtenerColumnas(usuarios: PersonaInterface[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
      console.log(this.columnas);
    }
  }
  recibirInformacion(data: PersonaInterface) {
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
    console.log('Componente padre info usuarios', this.informacionUsuarios);
  }
}
