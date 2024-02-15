import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ec-register',
  templateUrl: './ec-register.component.html',
  styleUrls: ['./ec-register.component.scss']
})
export class EcRegisterComponent {
  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  confirmPasswordControl = new FormControl('', Validators.required);
  phoneNumberControl = new FormControl('', Validators.required);
  addressControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    // Check if all form controls are valid
    if (
      this.usernameControl.valid &&
      this.passwordControl.valid &&
      this.confirmPasswordControl.valid &&
      this.phoneNumberControl.valid &&
      this.addressControl.valid
    ) {
      const userDetails = {
        username: this.usernameControl.value,
        password: this.passwordControl.value,
        confirmPassword: this.confirmPasswordControl.value,
        phoneNumber: this.phoneNumberControl.value,
        address: this.addressControl.value
      };
  
      // Call the register method of the AuthService to save the user details
      this.authService.register(userDetails).subscribe(
        (response) => {
          // Display success message using SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Registration successful',
            text: 'You have been successfully registered!',
          }).then(() => {
            // Reset the form after successful registration
            this.resetForm();
            // Navigate to login page
            this.router.navigate(['']);
          });
        },
        (error) => {
          // Display error message using SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: 'Failed to register. Please try again later.',
          });
        }
      );
    } else {
      // Display form validation error message using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Fail',
        text: 'Please fill in all required fields.',
      });
    }
  }
// Reset all form controls to their initial state
  resetForm() {
    this.usernameControl.reset();
    this.passwordControl.reset();
    this.confirmPasswordControl.reset();
    this.phoneNumberControl.reset();
    this.addressControl.reset();
  }
}
