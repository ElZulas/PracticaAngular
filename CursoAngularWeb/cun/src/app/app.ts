import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Practica Angular';
  nombres: Array<String> = ['Angel', 'Ernesto', 'Carlos', 'Laura'];
  tipoMensaje: String = 'aviso';
  colorFondo = '#008AFF';
  addTextUnderline = false;
  addTextRed = true;
  
  ciudades = [
    { pais: 'México', ciudad: 'Ciudad de México', habitantes: 9209944 },
    { pais: 'España', ciudad: 'Madrid', habitantes: 3223334 },
    { pais: 'Francia', ciudad: 'París', habitantes: 2161000 },
    { pais: 'Italia', ciudad: 'Roma', habitantes: 2873000 },
    { pais: 'Japón', ciudad: 'Tokio', habitantes: 13960000 },
    { pais: 'Brasil', ciudad: 'São Paulo', habitantes: 12396372 }
  ];
}
