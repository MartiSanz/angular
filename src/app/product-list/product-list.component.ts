import { Component } from '@angular/core';

import { products } from '../products'; /* trae un json */

/* linkea en typeScript el html y el css */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  /* define la lista de productos que luego usa el html */
  products = products;

  share() {
    window.alert('El producto fue compartido');
  }

  onNotify() {
    window.alert('Se le notificará cuando el producto salga a la venta');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
