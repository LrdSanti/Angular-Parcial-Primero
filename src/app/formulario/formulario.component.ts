import { Component } from '@angular/core';
import { Employee } from '../models/employee'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
  

export class FormularioComponent {

  totalPapa: number = 0;
  employeeArray: Employee[] = [
    { id: 1, cedula: "1005253670", name: "Santiago", lastname: "Hernandez", edad: 18, liquidacion : 720000 },
    { id: 2, cedula: "1005253672", name: "Pablo", lastname: "Perez", edad: 17, liquidacion : 340000},
    { id: 3, cedula: "1005253673", name: "Quintero", lastname: "Ospina", edad: 20, liquidacion : 800000  },
    
  ];

  selectedEmployee: Employee = new Employee();
  
  addOrEdit() { 
    this.selectedEmployee.id = this.employeeArray.length + 1;
    // this.selectedEmployee.liquidacion = this.liquidacionHijo(this.selectedEmployee.edad);
   this.selectedEmployee.liquidacion = this.liquidacion(this.selectedEmployee.edad);
    this.employeeArray.push(this.selectedEmployee);

    this.selectedEmployee = new Employee();
  }

  liquidacionHijo(total: any):number { 
    return this.totalPapa = total
  }
   liquidacion(edad: number): number {
    
     if (edad >= 1 && edad <= 17) {
       return edad * 20000
     } else if (edad >= 18) {
       return edad * 40000
     }
     return 0;
   }


}
