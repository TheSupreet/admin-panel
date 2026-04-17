import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { SettingsState, ChangeLanguage } from '../../store/settings.state';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    TranslateModule,
    InputTextModule,
    FormsModule,
    MenuModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  private store = inject(Store);
  
  settings$ = this.store.select(SettingsState.language);

  languages: MenuItem[] = [
    { label: 'English', command: () => this.setLang('en') },
    { label: 'Español', command: () => this.setLang('es') }
  ];

  email = '';
  password = '';

  ngOnInit() {
  }

  setLang(lang: string) {
    this.store.dispatch(new ChangeLanguage(lang));
  }
}
