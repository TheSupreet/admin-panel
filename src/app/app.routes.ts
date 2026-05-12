import { Routes } from '@angular/router';
import { Login } from './auth/pages/login/login';
import { SignUpComponent } from './auth/pages/sign-up/sign-up';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: Login },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];
