import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodItemsComponent } from '../food-items/food-items.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.css']
})
export class OrderFoodComponent implements OnInit {
  food;
  cartDetail;
  @ViewChild(FoodItemsComponent) fic:FoodItemsComponent
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.fetchFood('Breakfast');
  }
  fetchFood(cat){
    this.user.getFood(cat).subscribe((res)=>{
      console.log(res);
      this.food=res;
      this.food=this.food.Food;
    })
  }
}
