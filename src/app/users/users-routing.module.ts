import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTableComponent } from './book-table/book-table.component';
import { ContentComponent } from './content/content.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
    { path: '', component: UsersComponent,
      children:[
      {
        path:'',redirectTo:'order',pathMatch:'full'
      },
      {
        path:'order',component:OrderFoodComponent,
        children:[
          {
            path:'',redirectTo:'food',pathMatch:'full'
          },{
          path:'food',component:FoodItemsComponent
        },
      ]
      },
      {
        path:'order/table',component:BookTableComponent
      }
    ] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
