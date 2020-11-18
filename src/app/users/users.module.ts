import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [UsersComponent,LoginComponent,SignupComponent, HeaderComponent, FooterComponent, ContentComponent, AboutComponent, BookTableComponent, OrderFoodComponent, FoodItemsComponent, CartComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
