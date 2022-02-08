import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {

/*  El decorador @Input() indica que el valor de la propiedad viene del componente padre: ProductListComponent.*/

  @Input() product: Product | undefined;

  /*  nofify es un EVENTO */
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
