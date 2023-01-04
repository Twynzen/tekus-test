import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/shared/constants/login.constants';
import { OptionsForm } from 'src/app/shared/interfaces/optionsLogin.interface';

@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"><app-form>`,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  options: OptionsForm = {
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }
}
