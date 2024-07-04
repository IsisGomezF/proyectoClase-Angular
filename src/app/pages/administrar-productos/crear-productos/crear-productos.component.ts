import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductosService } from '../../../services/productos/productos.service';
import {
  CrearProductoInterface,
  ProductosInterface,
} from '../../../core/interface/productos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-productos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css',
})
export class CrearProductosComponent implements OnInit {
  productoForm: FormGroup;
  private formBuilder = inject(FormBuilder);
  private productoService = inject(ProductosService);

  ngOnInit(): void {
    this.productoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      nit: ['', []],
      razonSocial: ['', []],
      telefono: ['', []],
      direccion: ['', []],
    });
  }

  crearProducto() {
    const data = this.productoForm.value;
    const nuevoProducto: CrearProductoInterface = {
      nombre: data.nombre,
      sku: data.sku,
      cantidad: data.cantidad,
      precio: data.precio,
      distribuidor: {
        nit: data.nit,
        razonSocial: data.razonSocial,
        telefono: data.telefono,
        direccion: data.direccion,
      },
    };
    console.log(this.productoForm.value);
    this.productoService
      .crearProductos(nuevoProducto)
      .subscribe((resp: any) => {
        Swal.fire("Producto creado", `${resp.msg}`, 'success')
        this.resetearFormulario()
        // console.log('resp', resp);
      });
  }

  resetearFormulario(){
    this.productoForm.reset();
  }
}
