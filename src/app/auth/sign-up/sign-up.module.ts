import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from 'src/app/auth/sign-up/sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { FormModule } from 'src/app/auth/form/form.module';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormModule
  ]
})
export class SignUpModule { }
