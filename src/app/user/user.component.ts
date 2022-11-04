import { Component,EventEmitter,OnInit} from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import {BehaviorSubject} from 'rxjs';
import {CartApiService} from '../services/cart-api.service';
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  productList : any=[];
  products : any = [];
  allProducts: any = 0;
  totalPrice:any;
  quantity:number = 1;

constructor(private cartItem:ApiServiceService,
  private cartApi:CartApiService ){
    this.cartItem.getData().subscribe((res)=>{
      this.products=res;
    });
  }
ngOnInit(): void {
  this.cartItem.getData().subscribe(res=>{
    this.productList=res;
    this.productList.array.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
    });
  })
  this.allProducts =this.cartApi.getTotalAmount();
}
removeCartItem(item:any){
  this.cartApi.removeCartItem(item);
}
clearCart(){
  this.products=[];
  this.cartItem.clearCart(1350).subscribe()
}


}
