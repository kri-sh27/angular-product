import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  constructor() { }
  @Input() myproduct:any[]=[];
  @Output() rproduct=new EventEmitter;
  @Output() addf=new EventEmitter;

  delproduct(data:number){
    this.rproduct.emit(data);
  }

  afav(data:number){
    this.addf.emit(data);
  }

 

}
