import { Component, OnInit } from '@angular/core';
import { error_messages } from '../../../error_message'
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  foodadd: FormGroup;
  error_message = error_messages;
  multipleImages = [];
  constructor(private fb: FormBuilder,private adminSer:AdminService ) { 
    {
      this.foodadd = this.fb.group({
        food_name: new FormControl('', Validators.compose([
          Validators.required, 
        ])),
        cost: new FormControl('', Validators.compose([
          Validators.required,Validators.pattern(/^[0-9]\d*$/)
        ])),
        category: new FormControl('', Validators.compose([
        ])),
        images: new FormControl('', Validators.compose([
        ]))
      }
      );
    }
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.foodadd.get('images').setValue(file);
    }
  }
   
  
  onSubmit(){
    
  }

  data(){
    console.log(this.foodadd.value);
    this.adminSer.addFood(this.foodadd.value).subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }


}
