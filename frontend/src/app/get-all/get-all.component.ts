import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {



  constructor (private rou:Router,private ser:CarsService) {}

  ngOnInit(): void {
    this.getAll();
    
      }
    
    car:Cars[]=[];
    
    getAll(){
      this.ser.getAll().subscribe((res)=>{
        this.car=res;
    
      });
    }
;
post() {
  this.rou.navigate(['post']);
}

deleteid(id: number) {
this.rou.navigate(['delete',id]);
// this.rou.navigate(['']);
}

 update(id: number) {
 this.rou.navigate(['update',id]);
  }

getById(id: number) {
this.rou.navigate(['getByid',id]); 
 }

}
