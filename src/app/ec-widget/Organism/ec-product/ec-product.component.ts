import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ec-product',
  templateUrl: './ec-product.component.html',
  styleUrls: ['./ec-product.component.scss']
})
export class EcProductComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  // fetch the products 
  fetchProducts(): void {
    this.cartService.getProducts().subscribe(
      (products: any[]) => {
        this.products = products;
        this.filteredProducts = products; // Initialize filteredProducts with all products initially
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
// Add the product to the cart
addToCart(product: any): void {
  // Retrieve the user ID from local storage
  const userId = localStorage.getItem('userId');

  // Check if the user ID exists
  if (userId) {
    // Add the product to the cart
    this.cartService.addToCart(userId, product);
    console.log('Product added to cart:', product);

    // Display a success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: 'Product added to cart successfully!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Go to Cart'
    }).then((result) => {
      // Redirect to the cart page if the user confirms
      if (result.isConfirmed) {
        this.router.navigate(['/cart']);
      }
    });
  } else {
    // Display an error message if the user ID is not found in local storage
    console.error('User ID not found in local storage.');
  }
}

  // search product
  searchProducts(): void {
    // If the search query is empty, show all products
    if (!this.searchQuery) {
      this.filteredProducts = this.products;
      return;
    }

    const query = this.searchQuery.toLowerCase(); // Convert search query to lowercase

    // Filter products based on the search query and additional criteria
    this.filteredProducts = this.products.filter(product =>
      // Check if the product title or any other criteria match the search query
      product.title.toLowerCase().includes(query)
      
    );
  }

 // Method to navigate to product details page
 showProductDetails(productId: string): void {
  // Redirect to the product details page with product ID as route parameter
  this.router.navigate(['/product-details', productId]);
}
}
