import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//exportamos nuestro modelo
export interface Producto {
  //traemos los datos de la llamada a la api
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean
}

@Injectable({
  providedIn: 'root',
})

//recoge el modelo/interfaz de producto y lo transforma en un array de productos
export class ProductoService {
  //he utilizado otra web para el json porque no me dejaba con jsonblob crear nada
  private url = 'https://api.myjson.online/v2/records/261c16b2-00a1-4a7b-ad3d-99f283895a29'

  constructor(private http: HttpClient) { }

  //método que carga los productos
  cargarProductos() {
    return this.http.get<Producto[]>(this.url)
  }
}


