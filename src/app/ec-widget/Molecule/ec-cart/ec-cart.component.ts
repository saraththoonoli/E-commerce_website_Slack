import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ec-cart',
  templateUrl: './ec-cart.component.html',
  styleUrls: ['./ec-cart.component.scss']
})
export class EcCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    // Check if user is authenticated before loading cart items
    if (!this.isAuthenticated()) {
      // Display a SweetAlert message asking the user to login first
      Swal.fire({
        icon: 'warning',
        title: 'Please Login First',
        text: 'To access the cart, please login first.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect the user to the login page
          this.router.navigate(['/']);
        }
      });
      return;
    }
    
    this.loadCartItems();
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const userId = localStorage.getItem('userId');
    return !!userId; // Returns true if userId exists, false otherwise
  }

  // Load items in the cart
  loadCartItems(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cartItems = this.cartService.getCart(userId);
    } else {
      console.error('User ID not found in local storage.');
    }
  }

  // Remove item from cart
  removeFromCart(index: number): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cartService.removeFromCart(userId, index);
      this.cartItems.splice(index, 1); // Update the cart items array in the component
    } else {
      console.error('User ID not found in local storage.');
    }
  }

  // Clear all items from cart
  clearCart(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cartService.clearCart(userId);
      this.cartItems = []; // Clear cart items array after clearing cart
    } else {
      console.error('User ID not found in local storage.');
    }
  }
}
