import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../core/interface/productos.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductosInterface[] = [];
  titulo: string = 'Lista de productos';
  columnas: string[] = ['nombre', 'sku', 'cantidad', 'precio'];
  informacion: any;

  ngOnInit(): void {
    this.misProductos = [
      {
        nombre: 'pantalon',
        sku: 'asss',
        cantidad: 15,
        precio: 95000,
      },
      {
        nombre: 'chaqueta',
        sku: 'asss1',
        cantidad: 51,
        precio: 100000,
      },
      {
        nombre: 'camisas',
        sku: 'asss2',
        cantidad: 45,
        precio: 39900,
      },
    ];
  }
  recibirInformacion(data: any) {
    this.informacion = data;
    Swal.fire({
      title: `${data.nombre}`,
      html: `Nombre: ${data.nombre} <br>
      SKU: ${data.sku} <br>
      Cantidad: ${data.cantidad} <br>
      Precio: ${data.precio} <br>
      `,
    });
    console.log('Componente padre', this.informacion);
  }
}
