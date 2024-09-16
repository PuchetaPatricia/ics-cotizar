// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet para el enrutamiento

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Define el componente como independiente
  imports: [RouterOutlet] // Incluye RouterOutlet para enrutamiento
})
export class AppComponent {
  title = 'mi-aplicacion';
}
