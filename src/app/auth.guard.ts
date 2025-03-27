import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    console.log("🚀 ~ router url:", router.url)
    const authService = inject(AuthService);
    console.log('authService.isTokenSaved()', authService.isTokenSaved())
    console.log('authService.isRoleSaved()', authService.isRoleSaved())
    console.log('authService.isUserSaved()', authService.isUserSaved())
    console.log('authService.isAuthenticated()', authService.isAuthenticated())
    if (authService.isAuthenticated()) {
        return true;
    } else if (!authService.isRoleSaved()) {
        router.navigate(['/auth/role-selection']);
        return false;
    } else if (!authService.isUserSaved()) {
        router.navigate(['/auth/user-information']);
        return false;
    } else {
        router.navigate(['/auth/login']);
        return false;
    }
}