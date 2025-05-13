import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true; // ✅ مسموح
    } else {
      this.router.navigate(['/login']); // ❌ مش مسموح
      return false;
    }
  }
}
