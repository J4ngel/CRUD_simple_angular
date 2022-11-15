import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arreglo_de_empleados: Empleado[] = [
    {id:1, name:"Daniela", country:"Colombia"},
    {id:2, name:"Nicolas", country:"Colombia"},
    {id:3, name:"Sergio", country:"Colombia"}
  ];

  empleado_seleccionado: Empleado = new Empleado();

  addOrEdit(){
    if(this.empleado_seleccionado.id === 0){
      this.empleado_seleccionado.id = this.arreglo_de_empleados.length+1;
      this.arreglo_de_empleados.push(this.empleado_seleccionado);
    }
    
    this.empleado_seleccionado = new Empleado();
  }

  openForEdit(empleado: Empleado){
    this.empleado_seleccionado = empleado;
  }

  delete(){
    if(confirm('¿Está seguro de querer eliminar el usuario seleccionado?')){
      this.arreglo_de_empleados = this.arreglo_de_empleados.filter(x => x!=this.empleado_seleccionado);
      this.empleado_seleccionado = new Empleado();
    }
  }
}
