import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Cars } from '../cars';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor (private rou:Router,private ser:CarsService,private act:ActivatedRoute ) {}

  FormOne=new FormGroup({
    brand:new FormControl(),
    price:new FormControl(),
    color:new FormControl()
  
  });

  id:number;
   


  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    console.log(this.id);
    this.GetById();
  }

  GetById() {
    this.ser.getByid(this.id).subscribe((res) => {
      console.log(res);
      this.FormOne.patchValue(res);
    });
  } 

  update() {

    const formm=this.FormOne.value  as Cars;

    this.ser.update(this.id,formm).subscribe((res)=>{
      
      this.rou.navigate(['']);

    })
 }

back() {
this.rou.navigate(['']);
}



}
