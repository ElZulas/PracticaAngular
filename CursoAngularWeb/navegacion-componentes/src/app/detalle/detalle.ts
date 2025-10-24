import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class DetalleComponent {
  id: number = 0;
  tipo: string = '';
  nombre: string = '';

  // Datos de ejemplo para simular una base de datos
  private datos: { [key: string]: { nombre: string; tipo: string; descripcion: string } } = {
    '1': { nombre: 'Angular Framework', tipo: 'Framework', descripcion: 'Framework de desarrollo web moderno' },
    '2': { nombre: 'TypeScript', tipo: 'Lenguaje', descripcion: 'Superset de JavaScript con tipos estáticos' },
    '3': { nombre: 'Node.js', tipo: 'Runtime', descripcion: 'Entorno de ejecución para JavaScript' },
    '4': { nombre: 'React', tipo: 'Library', descripcion: 'Biblioteca para construir interfaces de usuario' },
    '5': { nombre: 'Vue.js', tipo: 'Framework', descripcion: 'Framework progresivo para JavaScript' }
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Convertir a número
      this.tipo = params['tipo'] || 'general';
      this.cargarDatos();
    });
  }

  cargarDatos() {
    const dato = this.datos[this.id.toString()];
    if (dato) {
      this.nombre = dato.nombre;
    } else {
      this.nombre = 'Elemento no encontrado';
    }
  }

  getDescripcion(): string {
    const dato = this.datos[this.id.toString()];
    return dato ? dato.descripcion : 'No hay descripción disponible';
  }

  getTipo(): string {
    const dato = this.datos[this.id.toString()];
    return dato ? dato.tipo : 'Desconocido';
  }
}
