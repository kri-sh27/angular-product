import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent  {
  myproduct=" ";
  @Output() mynewproduct =new EventEmitter;
  constructor() { }
  addproduct(data:string){
    this.mynewproduct.emit(data);
    this.myproduct="";
  }
  

}
