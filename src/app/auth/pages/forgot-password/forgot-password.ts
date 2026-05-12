import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthLayoutComponent } from '../../auth-layout/auth-layout';
import { AuthInputComponent } from '../../components/auth-input/auth-input';

@Component({
  selector: 'app-forgot-password',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    AuthLayoutComponent,
    AuthInputComponent,
  ],
  template: `
    <app-auth-layout>
      <div class="panel-header">
        <span class="panel-tag">Reset password</span>
        <h2>Forgot your <span>password?</span></h2>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
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

        <button
          pButton
          type="button"
          label="Send reset link"
          class="sign-in-btn"
          styleClass="p-button-rounded p-button-lg"
        ></button>
      </form>

      <p class="signup-text">
        Remember your password?
        <a href="/auth/login">Sign in</a>
      </p>
    </app-auth-layout>
  `,
  styles: []
})
export class ForgotPasswordComponent {
  email = '';
}