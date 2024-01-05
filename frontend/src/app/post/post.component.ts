import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {


constructor (private rou:Router,private ser:CarsService) {};

FormOne=new FormGroup({
    brand:new FormControl(),
    price:new FormControl(),
    color:new FormControl()
  
  });
  postData() {

    const form=this.FormOne.value as Cars;
    console.log(form);

    this.ser.postdata(form).subscribe((res)=>{
      console.log(res);
      this.rou.navigate(['']);

    })

  }


back() {
  this.rou.navigate(['']);
}

}
