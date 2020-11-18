import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { RightControlComponent } from './right-control/right-control.component';
import { LoginComponent } from './pages/login/login.component';
import { AdditemsComponent } from './pages/additems/additems.component';
import { ViewfoodComponent } from './pages/viewfood/viewfood.component';
import { ViewtableComponent } from './pages/viewtable/viewtable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    AdminsComponent, 
    HeaderComponent, 
    FooterComponent, 
    LeftsidebarComponent, 
    MaincontentComponent, 
    RightControlComponent, 
    LoginComponent, 
    AdditemsComponent, ViewfoodComponent, ViewtableComponent, SignupComponent, ],
  imports: [
    CommonModule,
    AdminsRoutingModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AdminsModule { }
