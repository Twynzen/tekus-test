import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS } from 'src/app/shared/constants/login.constants';
import { OptionsForm } from 'src/app/shared/interfaces/optionsLogin.interface';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {


  @Input() options !: OptionsForm;
  authForm !: FormGroup;
  signIn = ACTIONS.signIn;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authSvc: AuthService
  ) {
    this.options = { id: 'id por defecto' ,label: 'Label por defecto' };
  }

  ngOnInit(): void {
    this.initForm();

  }

  onSubmit(): void {
    console.log('Salve');
    this.authSvc.signUp(this.authForm.value);

  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
}
