import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Register a new user
  register(userDetails: any): Observable<any> {
    console.log('Registering user with details:', userDetails);
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  // Log in a user
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseUrl}/users`).pipe(
      map((users: any[]) => { // Specify type for 'users'
        const user = users.find((emp: any) => emp.username === username && emp.password === password); // Specify type for 'emp'

        if (user) {
          // Set user details in local storage
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          localStorage.setItem('role', 'user');
          localStorage.setItem('userId', user.id.toString());
          localStorage.setItem('token', 'loggedIn');
          return true;
        }
        console.log('Authentication failed. Returning false.');
        return false;
      })
    );
  }

  // Get contact details of a user
  getContactDetails(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}/contact-details`);
  }

  // Get user details by ID
  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  // Get user details
  getUserDetails(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  // Update user details
  updateUserDetails(userId: number, updatedDetails: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${userId}`, updatedDetails);
  }
}
