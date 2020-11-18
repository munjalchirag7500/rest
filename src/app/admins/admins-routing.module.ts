import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsComponent } from './admins.component';
import { AdditemsComponent } from './pages/additems/additems.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewfoodComponent } from './pages/viewfood/viewfood.component';
import { ViewtableComponent } from './pages/viewtable/viewtable.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: AdminsComponent,
    children:[
      { path: '', redirectTo: 'viewfood', pathMatch: 'full' },
      {
        path:'additems',component:AdditemsComponent
      },
      {
        path:'viewfood',component:ViewfoodComponent
      },
      {
        path:'viewtable',component:ViewtableComponent
      }
    ]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
