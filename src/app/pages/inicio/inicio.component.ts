import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [RouterLink]
})
export class InicioComponent {

  mostrarTitulo: boolean =true;

  personas= [
    {
      nombre:"Maria",
      edad: 15,
      ciudad: "Medellin",
      documento: 1111
    },
    {
      nombre:"Diana",
      edad: 11,
      ciudad: "Bogotá",
      documento: 1112
    },
    {
      nombre:"Diego",
      edad: 18,
      ciudad: "Cali",
      documento: 1113
    },
    {
      nombre:"Luz",
      edad: 13,
      ciudad: "Cali",
      documento: 1113
    }
  ];

  constructor(private router : Router){}

  abrirModal(){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

}
