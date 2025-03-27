import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isTokenSaved(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  isRoleSaved(): boolean {
    const role = localStorage.getItem('role');
    return !!role;
  }

  isUserSaved(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  isAuthenticated(): boolean {
    return this.isTokenSaved() && this.isRoleSaved() && this.isUserSaved();
  }

  logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}