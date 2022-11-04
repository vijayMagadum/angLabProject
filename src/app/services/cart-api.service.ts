import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  cartDataList : any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }
  
  getData(){
    return this.productList.asObservable();
  
  }
  setProduct(product : any){
    return this.cartDataList.push(...product);
    this.productList.next(product)
  }
  addToCart(product:any){
    this.cartDataList.push(product);
    this.getTotalAmount();
  }
  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.total;
    })
  }
  removeCartItem(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartDataList.splice(index,1)
      }
    })
  
  }
  clearCart(){
    this.cartDataList=[];
    this.productList.next(this.cartDataList);
  }
  
}
