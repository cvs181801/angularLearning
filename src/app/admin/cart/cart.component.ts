import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: '<router-outlet></router-outlet>',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
