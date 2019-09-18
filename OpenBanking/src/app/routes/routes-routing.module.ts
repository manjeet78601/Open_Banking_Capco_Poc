import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { LoginComponent } from './sessions/login/login.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login', titleI18n: 'Login' },
      },
     
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
        {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { title: 'dashboard', titleI18n: 'dashboard' },
      },

      {
        path: 'transactions',
         loadChildren: () =>
           import('./transactions/transactions.module').then(m => m.TransactionsModule),
           data: {title: 'Transactions', titleI18n: 'transactions'},
      },

      {
         path: 'services',
         loadChildren: () =>
           import('./services/services.module').then(m => m.ServicesModule),
           data: { title: 'Services', titleI18n: 'services' },
      },
    ],
  },
  
 // { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})

export class RoutesRoutingModule { }
