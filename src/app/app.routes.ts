import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    data: {
      breadcrumb: [
        {
          label: 'Dashboard',
          link: 'dashboard',
        }
      ]
    },
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    data: {
      breadcrumb: [
        {
          label: 'Projects',
          link: 'projects',
        }
      ]
    },
    loadComponent: () =>
      import('./pages/project/components/project-list/project.component').then(
        (m) => m.ProjectComponent
      ),
  },
  {
    path: 'projects/project-detail',
    loadComponent: () =>
      import(
        './pages/project/components/project-detail/project-detail.component'
      ).then((m) => m.ProjectDetailComponent),
  },
  {
    path: 'projects/project-detail/:id',
    loadComponent: () =>
      import(
        './pages/project/components/project-detail/project-detail.component'
      ).then((m) => m.ProjectDetailComponent),
  },
  {
    path: 'ratings',
    loadComponent: () =>
      import('./pages/rating/components/rating-list/rating.component').then(
        (m) => m.RatingComponent
      ),
    data: {
      breadcrumb: [
        {
          label: 'Ratings',
          link: 'ratings',
        }
      ]
    }
  },
  {
    path: 'ratings/rating-detail/:id',
    data: {
      breadcrumb: [
        {
          label: 'Ratings',
          link: 'rating-detail',
        },
        {
          label: 'Edit Rating',
          link: 'rating-detail',
        }
      ]
    },
    loadComponent: () =>
      import(
        './pages/rating/components/rating-detail/rating-detail.component'
      ).then((m) => m.RatingDetailComponent),
  },
  {
    path: 'chats',
    loadComponent: () =>
      import('./pages/chats/chats.component').then(
        (m) => m.ChatsComponent
      ),
    data: {
      breadcrumb: [
        {
          label: 'Chats',
          link: 'chats',
        }
      ]
    }
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
    data: {
      breadcrumb: [
        {
          label: 'Settings',
          link: 'settings',
        }
      ]
    }
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
