import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:AuthService,private route:Router){}
  canActivate():boolean{
    if(this.userService.loggedInStatus()){
      return true;
    }
    else{
      this.route.navigate(['/login']);
      return false;
    }
  }
}
