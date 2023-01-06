import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS } from 'src/app/shared/constants/login.constants';
import { OptionsForm } from 'src/app/shared/interfaces/options-login.interface';
import { AuthService } from '../services/auth.services';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {


  @Input() options !: OptionsForm;
  @BlockUI() blockUI!: NgBlockUI;
  authForm !: FormGroup;
  signIn = ACTIONS.signIn;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authSvc: AuthService
  ) {


    this.options = { id: 'id por defecto', label: 'Label por defecto' };
  }

  ngOnInit(): void {
    this.initForm();


  }

  onSubmit(): void {
    switch (this.options.label) {
      case "Sign Up": {
        alert('Esta funcionalidad no esta disponible.');
        break;
      }
      case "Sign In": {
        let res = this.authSvc.signIn(this.authForm.value);
        console.log(res);
        break;
      }

    }

  }

  private initForm(): void {
    this.authForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],

    })
  }
}
