import { Routes } from '@angular/router';
import { authGuard, roleGuard, userGuard, tokenGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [tokenGuard],
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'sign-up',
    canActivate: [tokenGuard],
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/auth/forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'role-selection',
    canActivate: [roleGuard],
    loadComponent: () =>
      import('./pages/role-selection/role-selection.component').then(
        (m) => m.RoleSelectionComponent
      ),
  },
  {
    path: 'user-information',
    canActivate: [userGuard],
    loadComponent: () =>
      import('./pages/user-information/user-information.component').then(
        (m) => m.UserInformation
      ),
  },
  {
    path: 'callback',
    loadComponent: () =>
      import('./pages/callback/callback.component').then(
        (m) => m.CallbackComponent
      ),
  },
  {
    path: 'authories',
    loadComponent: () =>
      import('./pages/IdP/IdP.component').then((m) => m.IdPComponent),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    data: {
      breadcrumb: [
        {
          label: 'Dashboard',
          link: 'dashboard',
        },
      ],
    },
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    canActivate: [authGuard],
    data: {
      breadcrumb: [
        {
          label: 'Projects',
          link: 'projects',
        },
      ],
    },
    loadComponent: () =>
      import('./pages/project/components/project-list/project.component').then(
        (m) => m.ProjectComponent
      ),
  },
  {
    path: 'projects/project-detail',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './pages/project/components/project-detail/project-detail.component'
      ).then((m) => m.ProjectDetailComponent),
  },
  {
    path: 'projects/project-detail/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './pages/project/components/project-detail/project-detail.component'
      ).then((m) => m.ProjectDetailComponent),
  },
  {
    path: 'ratings',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/rating/components/rating-list/rating.component').then(
        (m) => m.RatingComponent
      ),
    data: {
      breadcrumb: [
        {
          label: 'Ratings',
          link: 'ratings',
        },
      ],
    },
  },
  {
    path: 'ratings/rating-detail/:id',
    canActivate: [authGuard],
    data: {
      breadcrumb: [
        {
          label: 'Ratings',
          link: 'rating-detail',
        },
        {
          label: 'Edit Rating',
          link: 'rating-detail',
        },
      ],
    },
    loadComponent: () =>
      import(
        './pages/rating/components/rating-detail/rating-detail.component'
      ).then((m) => m.RatingDetailComponent),
  },
  {
    path: 'chats',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/chats/chats.component').then((m) => m.ChatsComponent),
    data: {
      breadcrumb: [
        {
          label: 'Chats',
          link: 'chats',
        },
      ],
    },
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
    data: {
      breadcrumb: [
        {
          label: 'Settings',
          link: 'settings',
        },
      ],
    },
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  },
];
