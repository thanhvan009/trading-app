import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    console.log("🚀 ~ AuthService ~ isAuthenticated ~ token:", token)
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    window.location.href = '/';
  }
}