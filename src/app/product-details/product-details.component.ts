import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  /** ActivatedRoute es específico para cada componente que carga Angular Router.           
  Contiene información sobre la ruta y los parámetros de la ruta.

  Al inyectar ActivatedRoute, está configurando el componente para usar un servicio. */

  ngOnInit() {

    // Primero obtengo el id del producto de la ruta actual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encuentre el producto que corresponda con el id proporcionado en la ruta.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
