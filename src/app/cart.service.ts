import { Injectable } from '@angular/core';
// importo la interfac products
import { Product } from './products';
// precio de envios
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // creo una variable que almacene la matriz de productos
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  //agrega un producto al carrito
  addToCart(product: Product) {
    this.items.push(product);
  }

  //get productos del carrito
  getItems() {
    return this.items;
  }

  //elimina todos productos del carrito y l oretorna vacio
  clearCart() {
    this.items = [];
    return this.items;
  }

  // get precio de los envios
  // type: string; price: number --> son los datos que contiene el JSON de envios
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
