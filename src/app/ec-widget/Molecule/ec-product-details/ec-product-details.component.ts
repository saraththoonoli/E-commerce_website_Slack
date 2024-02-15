import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ec-product-details',
  templateUrl: './ec-product-details.component.html',
  styleUrls: ['./ec-product-details.component.scss']
})
export class EcProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getProductDetails(productId);
      }
    });
  }

  getProductDetails(productId: string): void {
    this.cartService.getProductDetails(productId).subscribe(
      (product: any) => {
        this.product = product;
      },
      (error: any) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  // Add the product to the cart
  addToCart(product: any): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cartService.addToCart(userId, product);
      console.log('Product added to cart:', product);
  
      // Display a success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart',
        text: 'Product added to cart successfully!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
    } else {
      // Display an error message if the user ID is not found in local storage
      console.error('User ID not found in local storage.');
    }
  }
}
