import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
 email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@admin.com' && this.password === 'admin123') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin-dashboard']);
    } else {
      localStorage.setItem('role', 'user');
      this.router.navigate(['/']);
    }
  }
}
