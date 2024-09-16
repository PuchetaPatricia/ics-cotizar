// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CotizacionComponent } from './cotizacion/cotizacion.component';

@NgModule({
  imports: [
    BrowserModule,
    // otros módulos
  ],
  declarations: [
    CotizacionComponent
    // otros componentes
  ],
  providers: [],
  bootstrap: [] // Deja vacío si usas bootstrapApplication en main.ts
})
export class AppModule { }
