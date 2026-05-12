import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SettingsState, ChangeTheme } from '../../../store/settings.state';
import { AuthLayoutComponent } from '../../auth-layout/auth-layout';
import { AuthInputComponent } from '../../components/auth-input/auth-input';
import { AuthPasswordComponent } from '../../components/auth-password/auth-password';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    AuthLayoutComponent,
    AuthInputComponent,
    AuthPasswordComponent,
  ],
  template: `
    <app-auth-layout>
      <div class="panel-header">
        <span class="panel-tag">Welcome back</span>
        <h2>Sign in to <span>CliNutri</span></h2>
        <p>Your food data dashboard awaits.</p>
      </div>

      <form class="form-grid">
        <div class="form-group">
          <label for="email">Email address</label>
          <app-auth-input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autocomplete="email"
            icon="email"
            [(value)]="email"
          ></app-auth-input>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <app-auth-password
            placeholder="•••••••••••"
            [(value)]="password"
          ></app-auth-password>
        </div>

        <div class="row-between remember-row">
          <label class="remember-label">
            <p-checkbox
              name="rememberMe"
              [(ngModel)]="rememberMe"
              label="Remember me"
              inputId="rememberMe"
            ></p-checkbox>
          </label>
          <a href="/auth/forgot-password" class="forgot-link">Forgot password?</a>
        </div>

        <button
          pButton
          type="button"
          label="Sign in"
          class="sign-in-btn"
          styleClass="p-button-rounded p-button-lg"
        ></button>
      </form>

      <p class="signup-text">
        Don't have an account?
        <a href="/auth/sign-up">Create one free</a>
      </p>
    </app-auth-layout>
  `,
  styles: []
})
export class Login implements OnInit {
  private store = inject(Store);

  theme$: Observable<string> = this.store.select(SettingsState.theme);

  email = '';
  password = '';
  rememberMe = false;

  ngOnInit() {
    // Initialize theme from store/localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.store.dispatch(new ChangeTheme(savedTheme));
  }
}