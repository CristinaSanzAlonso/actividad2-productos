import { Component, signal } from '@angular/core';
import { ProductoService, Producto } from './services/producto';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad2-productos');
  constructor(private productoService: ProductoService) {
    this.productoService.cargarProductos().subscribe(
      (datos: Producto[]) => console.log('Productos cargados de la APi:', datos)
    );
  }
}
