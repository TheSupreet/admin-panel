import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';

export class ChangeLanguage {
  static readonly type = '[Settings] Change Language';
  constructor(public payload: string) {}
}

export class ChangeTheme {
  static readonly type = '[Settings] Change Theme';
  constructor(public payload: string) {}
}

export interface SettingsStateModel {
  language: string;
  theme: string;
}

@State<SettingsStateModel>({
  name: 'settings',
  defaults: {
    language: 'en',
    theme: 'light'
  }
})
@Injectable()
export class SettingsState {
  
  constructor(private translate: TranslateService) {}

  @Selector()
  static language(state: SettingsStateModel) {
    return state.language;
  }

  @Selector()
  static theme(state: SettingsStateModel) {
    return state.theme;
  }

  @Action(ChangeLanguage)
  changeLanguage(ctx: StateContext<SettingsStateModel>, action: ChangeLanguage) {
    const lang = action.payload;
    ctx.patchState({ language: lang });
    this.translate.use(lang);
  }

  @Action(ChangeTheme)
  changeTheme(ctx: StateContext<SettingsStateModel>, action: ChangeTheme) {
    const theme = action.payload;
    ctx.patchState({ theme });
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
