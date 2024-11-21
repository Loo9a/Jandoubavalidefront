import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Compte } from '../model/compte';

@Component({
  selector: 'app-register',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {
  isLogin: boolean = true; // Toggle between login and signup
  user: Compte = {
    idV: 0, // Initialize with a default value
    nom: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private router: Router, private signupService: SignupService) {}

  // Method to handle form submission


  // Method for registration
  onRegister() {
    console.log('Submitting registration request:', this.user); // Log user data
    this.signupService.register(this.user).subscribe(
      response => {
        console.log(response);
        alert('Registration successful');
        this.router.navigate(['/login']); // Redirect after successful registration
      },
      error => {
        console.error('Registration error:', error);
        alert('Error during registration. Please try again.');
      }
    );
  }

  // Method for login
  
  

  // Method to toggle between login and signup
}
