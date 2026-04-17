import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule, Store } from '@ngxs/store';
import { SettingsState, ChangeLanguage } from '../../store/settings.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Login,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        NgxsModule.forRoot([SettingsState])
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have English as default language array element', () => {
    expect(component.languages[0].label).toBe('English');
  });

  it('should dispatch ChangeLanguage action when language changes', () => {
    const storeSpy = jest.spyOn(store, 'dispatch');
    component.setLang('es');
    expect(storeSpy).toHaveBeenCalledWith(new ChangeLanguage('es'));
  });
});
