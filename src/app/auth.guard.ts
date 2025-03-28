import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

// For pages after logged in
export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if (!authService.isTokenSaved()){
        router.navigate(['/login']);
        return false;
    } else if (!authService.isRoleSaved()) {
        router.navigate(['/role-selection']);
        return false;
    } else if (!authService.isUserSaved()) {
        router.navigate(['/user-information']);
        return false;
    } else {
        return true;
    }
}

// For role selection screen
export const roleGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if (!authService.isTokenSaved()) {
        router.navigate(['/login']);
        return false;
    } else if (!authService.isRoleSaved()) {
        return true;
    } else {
        router.navigate(['/dashboard']);
        return false;
    }
}

// For login screen 
export const tokenGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if (!authService.isTokenSaved()) {
        return true;
    } else if (!authService.isRoleSaved()) {
        router.navigate(['/role-selection']);
        return false;
    } else if (!authService.isUserSaved()) {
        router.navigate(['/user-information']);
        return false
    } else {
        router.navigate(['/dashboard']);
        return false;
    }
}


// For user information screen 
export const userGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authService = inject(AuthService);

    if (!authService.isTokenSaved()) {
        router.navigate(['/login']);
        return false;
    } else if (!authService.isRoleSaved()) {
        router.navigate(['/role-selection']);
        return false;
    } else if (!authService.isUserSaved()) {
        return true;
    } else {
        router.navigate(['/dashboard']);
        return false;
    }
}