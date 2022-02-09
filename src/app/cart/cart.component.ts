import { Component, OnInit } from '@angular/core';

//FORMULARIO
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // vacia el carrito
    this.items = this.cartService.clearCart();
    console.warn('Su pedido ha sido enviado', this.checkoutForm.value);
    // vacia el fomulario de envio
    this.checkoutForm.reset();
  }
}
