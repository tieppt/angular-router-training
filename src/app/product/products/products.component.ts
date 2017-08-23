import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsId = [10, 20, 30, 50, 80];
  constructor() { }

  ngOnInit() {
  }

}
