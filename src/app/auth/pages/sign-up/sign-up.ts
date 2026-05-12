import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthLayoutComponent } from '../../auth-layout/auth-layout';
import { AuthInputComponent } from '../../components/auth-input/auth-input';

@Component({
  selector: 'app-sign-up',
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
        <span class="panel-tag">Get started</span>
        <h2>Create your <span>CliNutri</span> account</h2>
        <p>Join thousands of nutrition professionals using our platform.</p>
      </div>

      <form class="form-grid">
        <div class="form-group">
          <label for="fullName">Full name</label>
          <app-auth-input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            autocomplete="name"
            icon="user"
            [(value)]="fullName"
          ></app-auth-input>
        </div>

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
          label="Create account"
          class="sign-in-btn"
          styleClass="p-button-rounded p-button-lg"
        ></button>
      </form>

      <p class="signup-text">
        Already have an account?
        <a href="/auth/login">Sign in</a>
      </p>
    </app-auth-layout>
  `,
  styles: []
})
export class SignUpComponent {
  fullName = '';
  email = '';
}