import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() msg:string="product";
  @Input() productlist:any[]=[];
  @Output() newproduct=new EventEmitter;
  @Output() remproduct= new EventEmitter;
  @Input() myfav:any[]=[];
  @Output() addfav=new EventEmitter;
  @Output() rmvfav=new EventEmitter;




  constructor() { }
  addnewproduct($event:any){
    this.newproduct.emit($event);
  }

  delproduct($event:any){
    this.remproduct.emit($event);
  }

  addtofav($event:any){
    this.addfav.emit($event);
  }
 
  remvfav($event:any){
    this.rmvfav.emit($event);
  }
}
