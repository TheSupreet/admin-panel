import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SettingsState, ChangeTheme } from '../../store/settings.state';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="login-screen font-sans">
      <div class="login-card">
        <section class="left-panel">
          <div class="left-overlay"></div>
          <div class="left-content">
            <div>
              <div class="brand flex items-center gap-3 mb-8">
                <span class="brand-icon">
                  <i class="pi pi-map-marker"></i>
                </span>
                <div>
                  <p class="brand-title">CliNutri</p>
                  <p class="brand-subtitle">Less Math, More Care</p>
                </div>
              </div>

              <h1 class="left-heading">Know what's <span>in your food.</span></h1>
              <p class="left-description">
                Access the full USDA FoodData Central database. Search hundreds of thousands of
                foods, explore detailed macronutrient breakdowns, and track your dietary intake with
                confidence.
              </p>
            </div>

            <div class="powered-chip">
              <i class="pi pi-info-circle"></i>
              Powered by USDA FoodData Central
            </div>
          </div>
        </section>

        <section class="right-panel">
          <div class="auth-panel">
            <button
              type="button"
              style="position: absolute;"
              class="theme-toggle"
              aria-label="Toggle theme"
              (click)="toggleTheme()"
              pButton
            >
              <i [class]="themeIcon()"></i>
            </button>
            <div class="panel-box">
              <ng-content></ng-content>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [],
})
export class AuthLayoutComponent {
  private store = inject(Store);

  theme$: Observable<string> = this.store.select(SettingsState.theme);

  themeIcon = () => {
    const theme = this.store.selectSnapshot(SettingsState.theme);
    return theme === 'light' ? 'pi pi-moon' : 'pi pi-sun';
  };

  toggleTheme() {
    const currentTheme = this.store.selectSnapshot(SettingsState.theme);
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.store.dispatch(new ChangeTheme(newTheme));
  }
}
