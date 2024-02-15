import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ec-profile',
  templateUrl: './ec-profile.component.html',
  styleUrls: ['./ec-profile.component.scss']
})
export class EcProfileComponent implements OnInit {
  userDetails: any;
  editedUserDetails: any;

  constructor(private authService: AuthService , private router:Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.authService.getUserDetails(+userId).subscribe(
        (user: any) => {
          this.userDetails = user;
          this.editedUserDetails = { ...this.userDetails };
          console.log('User details:', this.userDetails);
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('User ID not found in local storage.');
    }
  }

  saveChanges(): void {
    const userId = localStorage.getItem('userId');
    if (userId && this.editedUserDetails) {
      this.authService.updateUserDetails(+userId, this.editedUserDetails).subscribe(
        (response: any) => {
          console.log('User details updated successfully:', response);
          this.userDetails = { ...this.editedUserDetails };
          Swal.fire({
            icon: 'success',
            title: 'Changes Saved',
            text: 'Your profile details have been updated successfully!'
          });
        },
        (error) => {
          console.error('Error updating user details:', error);
        }
      );
    }
  }


 logout(): void {
    // Clear user authentication details from local storage
    localStorage.removeItem('userId');
    localStorage.removeItem('loggedInUser'); // Remove user details
    localStorage.removeItem('role'); // Remove role
    localStorage.removeItem('token'); // Remove token
    // to the logout page
    this.router.navigate(['']);
  }
  
}
