import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/shared/constants/login.constants';
import { OptionsForm } from 'src/app/shared/interfaces/optionsLogin.interface';

@Component({
  selector: 'app-sign-in',
  template: `<app-form [options]="options"></app-form> `,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn
  }

}
