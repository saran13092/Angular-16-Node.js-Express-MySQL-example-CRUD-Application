import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent  implements OnInit{

constructor (private rou:Router,private ser:CarsService,private act:ActivatedRoute) {}

id:number;
car: Cars;

ngOnInit(): void {
  this.id = this.act.snapshot.params['id'];
  console.log(this.id);
  this.getById();
}

getById() {
  this.ser.getByid(this.id).subscribe((res) => {
    this.car = res as Cars;
    console.log(this.car);
  });
}



back() {
this.rou.navigate(['']);
}

}
