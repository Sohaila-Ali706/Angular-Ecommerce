import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: false
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    password: ''
  };

  message: string = '';
  messageColor: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.signupData).subscribe({
      next: (res) => {
        this.message = 'Account created successfully!';
        this.messageColor = 'green';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        this.message = err.error?.msg || 'حصل خطأ أثناء التسجيل';
        this.messageColor = 'red';
      }
    });
  }
}
