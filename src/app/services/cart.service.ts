// cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }
  // get product from api server
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }
  // add to cart with count 
  addToCart(userId: string, product: any): void {
    let userCartItems: any[] = JSON.parse(localStorage.getItem(userId) || '[]');

    // Check if the product already exists in the cart
    const existingProductIndex = userCartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, increment its count
      userCartItems[existingProductIndex].count += 1;
    } else {
      // If the product doesn't exist, add it to the cart with count 1
      userCartItems.push({ ...product, count: 1 });
    }

    localStorage.setItem(userId, JSON.stringify(userCartItems));
  }
  // get carts
  getCart(userId: string): any[] {
    let userCartItems: any[] = JSON.parse(localStorage.getItem(userId) || '[]');
    return userCartItems;
  }
  // clearcart
  clearCart(userId: string): void {
    localStorage.removeItem(userId);
  }
  // remove from cart
  removeFromCart(userId: string, index: number): void {
    let userCartItems: any[] = JSON.parse(localStorage.getItem(userId) || '[]');
    userCartItems.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem(userId, JSON.stringify(userCartItems));
  }
  getProductDetails(productId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${productId}`);
  }
  
}
