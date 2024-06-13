import { ProductoModel } from '../../../core/models/productos.model';
import { ProductosService } from '../../../services/productos/productos.service';
import { Component, OnInit, inject } from '@angular/core';
import { ProductosInterface } from '../../../core/interface/productos.interface';
import { TablaComponent } from '../../../components/tabla/tabla.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductosInterface[] = [];
  productos: ProductoModel[]=[]
  titulo: string = 'Lista de productos';
  columnas: string[] = ['nombre', 'sku', 'cantidad', 'precio'];
  informacion: ProductoModel | undefined;
  productosService = inject(ProductosService);
  dataProductos: ProductosInterface[]=[]
  private router =inject(Router)

  ngOnInit(): void {
    this.productosService
    .getProductos()
    .subscribe((verProductos:ProductoModel[]) =>{
      this.productos = verProductos
      this.misProductos = verProductos.map((producto)=>
        this.resumenDeProductos(producto)
      );

      this.obtenerColumnas(this.misProductos);
      console.log("mis productos, interface", this.misProductos);
      console.log("productos, model", this.productos);
    },
    );
  }

  resumenDeProductos(producto: ProductoModel): ProductosInterface{
    return {
      nombre: producto.nombre,
      sku: producto.sku,
      cantidad: producto.cantidad,
      precio: producto.precio,
      createdAt: producto.createdAt
    }
  }

  obtenerColumnas(verProductos: ProductosInterface[]) {
    if (verProductos?.length > 0) {
      this.columnas = Object.keys(verProductos[0]);
      console.log(this.columnas);
    }
  }

  recibirInformacion(data: ProductosInterface) {
    this.informacion = this.productos.find((producto)=> producto.sku === data.sku)
    // console.log('Informacion', this.informacion);
    // console.log('Data', data);

    if(this.informacion){
    Swal.fire({
      title: `${data.nombre}`,
      html: `Nombre: ${data.nombre} <br>
            SKU: ${data.sku} <br>
            Cantidad: ${data.cantidad} <br>
            Precio: ${data.precio} <br>
            Distribuidor: ${this.informacion.distribuidor.razonSocial} <br>
            Direccion: ${this.informacion.distribuidor.direccion} <br>
            Telefono: ${this.informacion.distribuidor.telefono} <br>
            Usuario que lo registro: ${this.informacion.usuario.nombre} <br>
            Calificacion: ${this.informacion.opiniones?.calificacion} <br>
            `,
    });
    }
  }
  crearProductos(){
    this.router.navigateByUrl(`${PATH.CREARPRODUCTOS}`)
  }
}


