import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './suma.html',
  styleUrl: './suma.css'
})
export class SumaComponent {
  primerNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.primerNumero = +params['primerNumero'] || 0;
      this.segundoNumero = +params['segundoNumero'] || 0;
      this.calcularSuma();
    });
  }

  calcularSuma() {
    this.resultado = this.primerNumero + this.segundoNumero;
  }

  getOperacion(): string {
    return `${this.primerNumero} + ${this.segundoNumero} = ${this.resultado}`;
  }

  esPar(): boolean {
    return this.resultado % 2 === 0;
  }

  getTipoResultado(): string {
    return this.esPar() ? 'Par' : 'Impar';
  }

  getColorResultado(): string {
    return this.esPar() ? '#4a9d4a' : '#ff6b6b';
  }
}
