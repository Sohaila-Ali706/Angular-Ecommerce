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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.signupData).subscribe({
      next: (res) => {
        console.log('تم التسجيل بنجاح', res);
        // بعد التسجيل بنجاح ينقلك لصفحة تسجيل الدخول
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('حصل خطأ أثناء التسجيل', err);
      }
    });
  }
}
