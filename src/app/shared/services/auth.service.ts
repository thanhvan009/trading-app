import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';

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
    return !isEmpty(user);
  }

  isAuthenticated(): boolean {
    return this.isTokenSaved() && this.isRoleSaved() && this.isUserSaved();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    window.location.href = '/';
  }
  clearLocalStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  }
}