import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  @Input() foodItems;
  cartDetail;
  foodCart=[];
  constructor() { }

  ngOnInit(): void {
  }

  addtocart(id){
   
  let foodData=this.foodItems.filter((element)=>{
    return element._id == id
  })
  this.foodCart.push(foodData[0]);
  console.log(this.foodCart);
  localStorage.setItem('CartFood',JSON.stringify(this.foodCart));
  }

}
