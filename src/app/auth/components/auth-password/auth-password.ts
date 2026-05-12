import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-auth-password',
  imports: [CommonModule, FormsModule, PasswordModule],
  template: `
    <div class="input-wrap">
      <svg
        class="input-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <p-password
        [(ngModel)]="value"
        [placeholder]="placeholder"
        [toggleMask]="true"
        [feedback]="false"
        styleClass="p-password"
        inputStyleClass="p-inputtext"
      ></p-password>
    </div>
  `,
  styles: []
})
export class AuthPasswordComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}