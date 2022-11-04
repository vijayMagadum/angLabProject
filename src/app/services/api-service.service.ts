import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  cartItemCount = 0;

  baseURL:string;

  constructor(private http:HttpClient) {
   }



getData(){
  return this.http.get("https://bookcart.azurewebsites.net/api/Book/");
}
 addtocart(userId:any,bookId:any){
  return this.http.post(`https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/${userId}/${bookId}`,{});
 }

 removeCartItem(userId:any,bookId:any){
  return this.http.delete(`https://bookcart.azurewebsites.net/api/shoppingcart/${userId}/${bookId}`,{})
 }
 clearCart(userId:any){
  return this.http.delete(`https://bookcart.azurewebsites.net/api/shoppingcart/${userId}`);
 }
}


