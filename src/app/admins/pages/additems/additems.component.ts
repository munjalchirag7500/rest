import { Component, OnInit } from '@angular/core';
import { error_messages } from '../../../error_message'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  foodadd: FormGroup;
  error_message = error_messages;
  images;
  multipleImages = [];
  constructor(private fb: FormBuilder) { 
    {
      this.foodadd = this.fb.group({
        food_name: new FormControl('', Validators.compose([
          Validators.required,
          
        ])),
        cost: new FormControl('', Validators.compose([
          Validators.required,Validators.pattern(/^[0-9]\d*$/)
        ])),
        
      }
      );
    }
  }
 
   
 
  
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    // this.service.foodadd(formData,this.foodadd.value).subscribe((response)=>{
    //   console.log(response);
    // })
  }

  data(){
    console.log(this.foodadd.getRawValue());
  }

  ngOnInit(): void {
  }


}
