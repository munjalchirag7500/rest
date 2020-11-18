import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { error_messages } from '../../../error_message'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error_message = error_messages;
  hide = true;
  unamePattern = "^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$";

  constructor(private fb: FormBuilder,private router :Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
   }

  ngOnInit(): void {
  }
  

  login(){
    console.log(this.loginForm.getRawValue());
  //   this.service.postdata(this.registerForm.value).subscribe((response=>{
  //     console.log(response);
  //     if(response){
  //       Swal.fire({
  //         text: 'SignUp Successfull',
  //         icon: 'success',
  //       })
  //       this.router.navigate(['/login'])
  //     }else{
  //       console.log("hello");
        
  //       Swal.fire({
  //         text: 'Error',
  //         icon: 'error',
  //       })
  //     }
  //   }))
  // }
  }
}
