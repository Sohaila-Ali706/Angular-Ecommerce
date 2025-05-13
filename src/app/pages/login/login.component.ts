import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:false
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
  this.authService.login(this.loginData).subscribe({
    next: (res: any) => {
      console.log('تم تسجيل الدخول بنجاح', res);
      localStorage.setItem('token', res.token); // بعد التعديل TypeScript مش هيشتكي
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error('حصل خطأ أثناء تسجيل الدخول', err);
    }
  });
}

}
