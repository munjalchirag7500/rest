import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;

  
  constructor() { }

  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem('CartFood'))
  }
  getCartDetail(){

  }

  checkOut(){
    
  }

}
