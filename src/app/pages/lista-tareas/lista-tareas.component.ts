import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { TareasInterface } from '../../core/interface/tareas.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [TablaComponent],
})
export class ListaTareasComponent implements OnInit {
  titulo: string = 'Lista de Tareas';
  columnas: string[] = ['status', 'titulo', 'tarea', 'plazo'];
  listaTareas: TareasInterface[] = [];
  solTareas:any


  ngOnInit(): void {
    this.listaTareas = [
      {
        status: 'Pendiente',
        titulo: 'Prueba',
        tarea: 'Vamos a revisar como le hacemos',
        plazo: undefined
      },
      {
        status: 'Pendiente',
        titulo: 'Prueba2',
        tarea: 'Porque no renderiza?',
        plazo: undefined
      }
    ];
    console.log('Lista tareas',this.listaTareas);
  }
  async modalNuevaTarea(){
    const { value: formValues } = await Swal.fire({
      title: "Agregar nueva tarea",
      html: `
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Titulo tarea</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre tarea">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Plazo</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Plazo">
      </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
        (document.getElementById("exampleFormControlInput1") as HTMLInputElement).value,
        (document.getElementById("exampleFormControlTextarea1")as HTMLInputElement).value,
        (document.getElementById("exampleFormControlTextarea1")as HTMLInputElement).value
        ];
      }
    });
    if (formValues) {
      const nuevaTarea:TareasInterface={
        status: '',
        titulo: formValues[0],
        tarea: formValues[1],
        plazo: formValues[2]
      }
      console.log(this.listaTareas);
      this.listaTareas.push(nuevaTarea)
      Swal.fire(JSON.stringify(formValues));
      // console.log(JSON.stringify(formValues));

    }
  }
}
