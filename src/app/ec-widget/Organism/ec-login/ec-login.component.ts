import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ec-login',
  templateUrl: './ec-login.component.html',
  styleUrls: ['./ec-login.component.scss']
})
export class EcLoginComponent {
  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const username = this.usernameControl.value;
    const password = this.passwordControl.value;

    // Check if username or password is empty
    if (!username || !password) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }

    // Call the login method of the AuthService
    this.authService.login(username, password).subscribe(
      (success: boolean) => {
        if (success) {
          // Get user details from local storage
          const loggedInUserString = localStorage.getItem('loggedInUser');
          if (loggedInUserString) {
            const loggedInUser = JSON.parse(loggedInUserString);
            // Navigate to the dashboard with user details as route parameters
            this.router.navigate(['/Purchase-now'], { state: { user: loggedInUser } });
            // Display success alert using SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Login Successful!',
              text: 'You are now logged in.',
              timer: 3000, // Automatically close after 3 seconds
              showConfirmButton: false,
            });
          } else {
            console.error('User details not found in local storage.');
          }
        } else {
          // Display error message for invalid credentials
          this.errorMessage = 'Invalid username or password';
          // Display error alert using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid username or password',
          });
        }
      },
      (error) => {
        console.error('Error during login:', error);
        // Handle specific types of errors
        if (error instanceof HttpErrorResponse) {
          // Handle HTTP errors (e.g., server errors)
          this.errorMessage = 'An error occurred. Please try again later.';
        } else {
          // Handle other types of errors (e.g., network errors)
          this.errorMessage = 'Network error. Please check your internet connection.';
        }
        // Display error alert using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.errorMessage,
        });
      }
    );
  }
}
