// src/app/cotizacion/cotizacion.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe]
})
export class CotizacionComponent {
  cotizacion = {
    fechaRetiro: new Date(),
    fechaEntrega: new Date(),
    transportista: 'Nombre del Transportista',
    calificacion: 4.5,
    importeViaje: 1000,
    formaPago: '',
    numeroTarjeta: '',
    pin: '',
    nombreCompleto: '',
    tipoDocumento: '',
    numeroDocumento: ''
  };

  formasPago = [
    'Tarjeta de Crédito',
    'Transferencia Bancaria',
    'PayPal',
    'Efectivo'
  ];

  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Formulario enviado', this.cotizacion);
  }
}
