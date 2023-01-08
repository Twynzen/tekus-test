import { Component, OnInit } from '@angular/core';
import { ACTIONS } from 'src/app/shared/constants/login.constants';
import { OptionsForm } from 'src/app/shared/interfaces/options-login.interface';

@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"><app-form>`,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  options: OptionsForm = {
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }
  ngOnInit(): void {
    alert('Esta funcionalidad no esta disponible.');
  }


}
