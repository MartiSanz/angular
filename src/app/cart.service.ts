import { Injectable } from '@angular/core';
// importo la interfac products
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // creo una variable que almacene la matriz de productos
  items: Product[] = [];

  constructor() {}

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
}
