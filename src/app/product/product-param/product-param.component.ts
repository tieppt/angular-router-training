import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-param',
  templateUrl: './product-param.component.html',
  styleUrls: ['./product-param.component.scss']
})
export class ProductParamComponent implements OnInit {
  productId: string;
  snapshotId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
    this.route.paramMap.subscribe(param => {
      this.productId = param.get('id');
    });
    this.snapshotId = this.route.snapshot.paramMap.get('id');
  }

}
