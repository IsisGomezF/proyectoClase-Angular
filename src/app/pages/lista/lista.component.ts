import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
    selector: 'app-lista',
    standalone: true,
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css',
    imports: [TablaComponent]
})
export class ListaComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string = "Lista personas";
  columnas:string[] = [
    'nombre',
    'fechaNacimiento',
    'tipoDocumento',
    'numeroDocumento',
    'numeroCelular',
    'email',
    'peso',
    ];

  ngOnInit(): void {
    this.personas = [
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

    console.log(this.personas);
  }
}
