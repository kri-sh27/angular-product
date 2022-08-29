import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products=[{name:"mobile",startdt:"2022-01-01",fav:0},
            {name:"laptop",startdt:"2022-01-01",fav:0}];

            
            lnk="";

  title = ' this is product page';
  favproduct:any[]=[];

  updatelnk(data:string){
    this.lnk= data;
  }

  addProduct($event:any){
    let obj={name:$event,startdt:"2022-01-02",fav:0};
    this.products.unshift(obj);
  }

  delproduct($event:any){
    this.products.splice($event,1);
  }

  addtofav($event:any){
    this.products[$event].fav=1;
    this.favproduct=this.products.filter(item=>item.fav==1);
  }

  removefav($event:any){
    this.products[$event].fav=0;
  }
}
