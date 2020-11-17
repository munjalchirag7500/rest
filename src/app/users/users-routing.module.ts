import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
    { path: '', component: UsersComponent,
      children:[
        {
        path:'',redirectTo:'orderfood',pathMatch:'full'
      },
      {
        path:'orderfood',component:OrderFoodComponent
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
