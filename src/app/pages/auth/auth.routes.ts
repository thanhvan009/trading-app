// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path     : '',
    children : [
      {
        path       : '',
        redirectTo : 'login',
        pathMatch  : 'full',
      },
      {
        path          : 'login',
        loadComponent : () => import('./login/login.component').then(m => m.LoginComponent),
      },
      {
        path          : 'role-selection',
        loadComponent : () => import('./role-selection/role-selection.component').then(m => m.RoleSelectionComponent),
      },
      {
        path          : 'user-information',
        loadComponent : () => import('./user-information/user-information.component').then(m => m.UserInformation),
      },
      {
        path          : 'sign-up',
        loadComponent : () => import('./login/login.component').then(m => m.LoginComponent),
      },
      {
        path          : 'forgot-password',
        loadComponent : () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
      },
      {
        path          : 'validate-account',
        loadComponent : () => import('./validate-account/validate-account.component').then(m => m.ValidateAccountComponent),
      },
    ]
  }
];