import { Injectable } from "@angular/core";
import { Book } from "../types/book";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: Array<Book> = [];
  
  add(book: Book){
    console.log(book)
    this.cart.push(book);
  }

  constructor() {}

  get(){
    return this.cart;
  }
  remove(book: Book){
    this.cart = this.cart.filter((b) => b != book)
  }
}