// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CotizacionComponent } from './app/cotizacion/cotizacion.component';
import { provideRouter } from '@angular/router';

// Define las rutas
const routes = [
  { path: '', component: CotizacionComponent },
  // otras rutas aquí
];

// Arranca la aplicación con el componente independiente
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Proporciona las rutas para enrutamiento
  ]
}).catch(err => console.error(err));
