import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input, output } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { ProductosInterface } from '../../core/interface/productos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columnas: string[] = [];
  // @Input() personas: PersonaInterface[] = [];
  @Input() titulo: string = '';
  @Input() mostratBotonCrearT: boolean = false
  @Input() mostrarColAcciones: boolean = true

  @Output() onInformacion:EventEmitter <any> = new EventEmitter();


  ngOnInit(): void {
    // this.columnas.push('acciones'); Lo voy a poner diractemente en html para poder alinear con el boton
    // console.log('personas en el componente hijo', this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['data'] && changes['data'].currentValue){
        this.data = changes['data'].currentValue;
      }
    // console.log("Componente hijo tabla ", changes);
    // console.log("data ", this.data);

  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }
  isFecha(value: any): boolean {
    return value instanceof Date;
  }
  enviarInformacion(data:any){
    // console.log("Data componente hijo", data);
    //Emite evento con la informacion de data
    this.onInformacion.emit(data)
  }
  funcionalidadBoton(){
    // console.log("el boton funciona");
    this.onInformacion.emit()
  }
}
