// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.routes').then(m => m.routes),
  },
  {
    path          : 'home',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path          : 'dashboard',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path          : 'projects',
    loadComponent : () => import('./pages/project/components/project-list/project.component').then(m => m.ProjectComponent),
  },
  {
    path          : 'projects/project-detail',
    loadComponent : () => import('./pages/project/components/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
  },
  {
    path          : 'ratings',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path          : 'settings',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  {
    path          : '**',
    loadComponent : () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];