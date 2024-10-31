import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/default/default.component').then(
        (l) => l.DefaultComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((p) => p.HomeComponent),
      },
    ],
  },
];
