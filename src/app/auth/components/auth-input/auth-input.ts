import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-auth-input',
  imports: [CommonModule, FormsModule, InputTextModule],
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
        <path [attr.d]="iconPath" />
      </svg>
      <input
        pInputText
        [type]="type"
        [id]="id"
        [name]="name"
        [(ngModel)]="value"
        [placeholder]="placeholder"
        [autocomplete]="autocomplete"
        class="p-inputtext"
      />
    </div>
  `,
  styles: []
})
export class AuthInputComponent {
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() autocomplete: string = '';
  @Input() icon: string = 'email'; // email, password, user
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  get iconPath(): string {
    switch (this.icon) {
      case 'email':
        return 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6';
      case 'password':
        return 'M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2M12 4V6H12V4M8 8V20H16V8H8Z';
      case 'user':
        return 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4L19 9Z';
      default:
        return '';
    }
  }
}