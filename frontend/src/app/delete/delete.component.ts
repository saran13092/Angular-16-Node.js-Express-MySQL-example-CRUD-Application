import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
constructor (private rou:Router,private ser:CarsService,private act:ActivatedRoute) {}

id:number;

ngOnInit(): void {
  this.id=this.act.snapshot.params['id'];
  this.delete();
  };

delete(){
  this.ser.deleteById(this.id).subscribe((res)=>{
  this.rou.navigate(['']);
  });
}
}
