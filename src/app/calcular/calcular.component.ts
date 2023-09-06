import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {

  @Input() edad: any = 0;
  @Output() total = new EventEmitter<number>()
  resultado: number = 0
  
  obtenerResultado() { 
    this.edad = Number.parseInt(this.edad)

    this.resultado = this.liquidacion(this.edad)
    this.total.emit(this.resultado)
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
