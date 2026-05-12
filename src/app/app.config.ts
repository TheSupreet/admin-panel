import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { SettingsState } from './store/settings.state';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  components: {
    button: {
      extend: {
        accent: {
          color: '#f59e0b',
          inverseColor: '#ffffff',
        },
      },
      css: ({ dt }) => `
.p-button-accent {
  background: ${dt('button.accent.color')};
  color: ${dt('button.accent.inverseColor')};
  transition-duration: ${dt('my.transition.fast')};
}
`,
    },
  },
  extend: {
    my: {
      transition: {
        slow: '0.75s',
        normal: '0.5s',
        fast: '0.25s',
      },
      color: {
        // Light theme colors
        loginBg: 'linear-gradient(180deg, #f5f5f0 0%, #ede8e0 100%)',
        leftPanelBg: '#456845',
        leftText: '#ffffff',
        leftAccent: '#84f69e',
        rightPanelBg: 'rgba(255, 255, 255, 0.95)',
        inputBg: '#faf8f3',
        inputBorder: '#cddccd',
        inputText: '#1a1f1a',
        inputPlaceholder: '#a8c3a8',
        labelColor: '#598659',
        btnBg: '#456845',
        btnHover: '#385538',
        // Dark theme colors
        loginBgDark: 'linear-gradient(180deg, #0d0d0a 0%, #1a1815 100%)',
        leftPanelBgDark: '#1a2d1a',
        leftTextDark: '#e8ede8',
        leftAccentDark: '#5ac95a',
        rightPanelBgDark: 'rgba(20, 20, 18, 0.95)',
        inputBgDark: '#2a2a26',
        inputBorderDark: '#404038',
        inputTextDark: '#e8ede8',
        inputPlaceholderDark: '#6b7a6b',
        labelColorDark: '#7da47d',
        btnBgDark: '#3d6d3d',
        btnHoverDark: '#4a854a',
      },
    },
  },
  css: ({ dt }) => `
/* Design tokens */
:root {
  --transition: ${dt('my.transition.normal')};
  --transition-fast: ${dt('my.transition.fast')};
  --transition-all: color var(--transition), background var(--transition), border-color var(--transition);
}

/* Theme transitions */
* {
  transition: var(--transition-all);
}

.theme-toggle {
  transition: background var(--transition-fast), border-color var(--transition), color var(--transition), transform 0.2s;
}

/* Light theme */
[data-theme='light'] {
  --login-bg: ${dt('my.color.loginBg')};
  --left-panel-bg: ${dt('my.color.leftPanelBg')};
  --left-text: ${dt('my.color.leftText')};
  --left-accent: ${dt('my.color.leftAccent')};
  --right-panel-bg: ${dt('my.color.rightPanelBg')};
  --input-bg: ${dt('my.color.inputBg')};
  --input-border: ${dt('my.color.inputBorder')};
  --input-text: ${dt('my.color.inputText')};
  --input-placeholder: ${dt('my.color.inputPlaceholder')};
  --label-color: ${dt('my.color.labelColor')};
  --btn-bg: ${dt('my.color.btnBg')};
  --btn-hover: ${dt('my.color.btnHover')};
}

/* Dark theme */
[data-theme='dark'] {
  --login-bg: ${dt('my.color.loginBgDark')};
  --left-panel-bg: ${dt('my.color.leftPanelBgDark')};
  --left-text: ${dt('my.color.leftTextDark')};
  --left-accent: ${dt('my.color.leftAccentDark')};
  --right-panel-bg: ${dt('my.color.rightPanelBgDark')};
  --input-bg: ${dt('my.color.inputBgDark')};
  --input-border: ${dt('my.color.inputBorderDark')};
  --input-text: ${dt('my.color.inputTextDark')};
  --input-placeholder: ${dt('my.color.inputPlaceholderDark')};
  --label-color: ${dt('my.color.labelColorDark')};
  --btn-bg: ${dt('my.color.btnBgDark')};
  --btn-hover: ${dt('my.color.btnHoverDark')};
}

/* Login screen styles */
.login-screen {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  background: var(--login-bg);
}

.login-card {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(40%, 1.05fr) minmax(40%, 0.95fr);
  gap: 1.5rem;
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  position: relative;
}

.left-panel,
.right-panel {
  position: relative;
  height: 100%;
}

.left-panel {
  padding: 4rem 3rem;
  background: var(--left-panel-bg);
  overflow: hidden;
}

.left-panel::before,
.left-panel::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.left-panel::before {
  width: 320px;
  height: 320px;
  top: -90px;
  right: -90px;
  background: rgba(101, 168, 112, 0.16);
}

.left-panel::after {
  width: 260px;
  height: 260px;
  bottom: -100px;
  left: -90px;
  background: rgba(206, 236, 203, 0.08);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
}

.left-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.08), transparent 18%),
    radial-gradient(circle at 85% 20%, rgba(136, 196, 137, 0.12), transparent 15%),
    radial-gradient(circle at 40% 80%, rgba(70, 139, 85, 0.14), transparent 20%);
  pointer-events: none;
}

.left-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  align-items: center;
}

.brand-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #c9f7d7;
  font-size: 1.15rem;
}

.brand-title {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--left-text);
  margin-bottom: 0.15rem;
  transition: color var(--transition);
}

.brand-subtitle {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  transition: color var(--transition);
}

.left-heading {
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  line-height: 0.95;
  font-weight: 700;
  color: var(--left-text);
  max-width: 14ch;
  transition: color var(--transition);
}

.left-heading span {
  color: var(--left-accent);
  transition: color var(--transition);
}

.left-description {
  margin-top: 1.5rem;
  max-width: 38rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  transition: color var(--transition);
}

.powered-chip {
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(132, 255, 158, 0.18);
  background: rgba(255, 255, 255, 0.04);
  color: #c7f4c6;
  font-size: 0.78rem;
  margin-top: 1.5rem;
}

.powered-chip i {
  font-size: 1rem;
}

.right-panel {
  position: relative;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-panel {
  width: 100%;
  max-width: 440px;
  position: relative;
  min-height: 100%;
}

.theme-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1rem;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--label-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.theme-toggle:hover {
  background: var(--right-panel-bg);
}

.panel-box {
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 3rem 2.5rem;
  border-radius: 32px;
  background: var(--right-panel-bg);
  border: 1px solid var(--input-border);
  box-shadow: 0 50px 120px rgba(0, 0, 0, 0.36);
  transition: background var(--transition), border-color var(--transition);
}

.auth-panel {
  width: 100%;
  max-width: 640px;
  margin: auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-header {
  margin-bottom: 1.75rem;
}

.panel-tag {
  display: inline-flex;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.72rem;
  color: #a8efb8;
  margin-bottom: 0.85rem;
}

.panel-header h2 {
  font-size: 2rem;
  line-height: 1.05;
  margin: 0;
  color: var(--input-text);
  transition: color var(--transition);
}

.panel-header h2 span {
  color: var(--left-accent);
  transition: color var(--transition);
}

.panel-header p {
  margin-top: 0.85rem;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.95rem;
  transition: color var(--transition);
}

.form-grid {
  display: grid;
  gap: 1.2rem;
}

.field label,
.form-group label {
  display: block;
  margin-bottom: 0.85rem;
  color: var(--label-color);
  font-size: 0.95rem;
  font-weight: 600;
  transition: color var(--transition);
}

.input-wrap {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  padding: 0.95rem 1rem;
  border-radius: 1.5rem;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  transition: background var(--transition), border-color var(--transition);
}

.input-icon {
  min-width: 1rem;
  min-height: 1rem;
  color: var(--left-accent);
  transition: color var(--transition);
}

.input-wrap input,
.input-wrap .p-password {
  width: 100%;
}

.input-wrap .p-password .p-inputtext {
  width: 100%;
  padding-right: 2.75rem;
}

.input-wrap input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--input-text);
  font-size: 1rem;
  padding: 0;
  outline: none;
  transition: color var(--transition);
}

.input-wrap input::placeholder {
  color: var(--input-placeholder);
  transition: color var(--transition);
}

.row-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: #b9e7b2;
  font-size: 0.95rem;
}

.remember-row {
  margin-top: 0.25rem;
}

.forgot-link {
  font-size: 0.95rem;
  color: #84f69e;
  text-decoration: none;
}

.forgot-link:hover {
  color: #d8ffce;
}

.remember-label {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}

.remember-checkbox {
  width: 1rem;
  height: 1rem;
  accent-color: #84f69e;
}

.sign-in-btn {
  width: 100%;
  font-weight: 700;
  background: #7bd884;
  color: #081106;
  border: none;
  box-shadow: 0 18px 28px rgba(61, 164, 98, 0.2);
}

.sign-in-btn:hover {
  background: #89e49c;
}

.signup-text {
  margin-top: 1.25rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
}

.signup-text a {
  color: #84f69e;
  font-weight: 600;
}

.signup-text a:hover {
  color: #e9ffdf;
}

@media (max-width: 992px) {
  .login-card {
    grid-template-columns: 1fr;
  }

  .right-panel,
  .left-panel {
    min-height: auto;
  }
}

@media (max-width: 640px) {
  .left-panel {
    padding: 2rem 1.5rem;
  }

  .right-panel {
    padding: 1.5rem 1rem;
  }

  .panel-box {
    padding: 1.75rem;
  }
}
`,
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '[data-theme="dark"]',
        },
      },
    }),
    provideTranslateHttpLoader({ prefix: '/assets/i18n/', suffix: '.json' }),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
      }),
      NgxsModule.forRoot([SettingsState]),
      NgxsStoragePluginModule.forRoot({
        keys: ['settings.language', 'settings.theme'],
      }),
    ),
  ],
};
