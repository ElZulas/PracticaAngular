import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DirectivaComponent } from './directiva/directiva';
import { DirectivaIncorporadaComponent } from './directiva-incorporada/directiva-incorporada';
import { DetalleComponent } from './detalle/detalle';
import { SumaComponent } from './suma/suma';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'directiva', component: DirectivaComponent },
  { path: 'directiva-incorporada', component: DirectivaIncorporadaComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'detalle/:id/:tipo', component: DetalleComponent },
  { path: 'suma/:primerNumero/:segundoNumero', component: SumaComponent },
  { path: '**', redirectTo: '/home' } // Ruta comodín para manejar rutas no encontradas
];
