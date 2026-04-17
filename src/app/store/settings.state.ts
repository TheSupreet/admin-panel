import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';

export class ChangeLanguage {
  static readonly type = '[Settings] Change Language';
  constructor(public payload: string) {}
}

export interface SettingsStateModel {
  language: string;
}

@State<SettingsStateModel>({
  name: 'settings',
  defaults: {
    language: 'en'
  }
})
@Injectable()
export class SettingsState {
  
  constructor(private translate: TranslateService) {}

  @Selector()
  static language(state: SettingsStateModel) {
    return state.language;
  }

  @Action(ChangeLanguage)
  changeLanguage(ctx: StateContext<SettingsStateModel>, action: ChangeLanguage) {
    const lang = action.payload;
    ctx.patchState({ language: lang });
    this.translate.use(lang);
  }
}
