import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Compte } from '../model/compte';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: Compte = { idV: 0, nom: '', email: '', password: '', role: '' };

  constructor(private router: Router, private loginService: LoginService) {}
  onLogin() {
    console.log('Submitting login request:', this.user); // Log user data
    this.loginService.login(this.user).subscribe(
      response => {
        console.log('Login successful:', response);
        alert('Login successful');
        if (response.role === 'ADMIN'){
        this.router.navigate(['/dashboard']);}
        else {
          this.router.navigate(['/home'])
        }
      },
      error => {
        console.error('Login error:', error);
        console.error('Error response:', error.error);
        alert('Invalid email or password. Please try again.');
      }
    );
  }
}
