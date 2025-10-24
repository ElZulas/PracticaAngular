import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-directiva-incorporada',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './directiva-incorporada.html',
  styleUrl: './directiva-incorporada.css'
})
export class DirectivaIncorporadaComponent {
  nombres: Array<String> = ['Angel', 'Ernesto', 'Carlos', 'Laura']
  tipoMensaje: String = 'aviso'
  colorFondo: String = 'blue'
  subrayarTexto: Boolean = true
  colorRojo: Boolean = false
}
