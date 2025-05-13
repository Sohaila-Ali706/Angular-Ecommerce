import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // حط رابط الباك‌اند، وعدّل المسار لـ signup
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }

  // استخدم /signup عوضًا عن /register
  signup(userData: any) {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout() {
  localStorage.removeItem('token');
  }
}
