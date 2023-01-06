import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ShowSubscribedComponent } from './show-subscribed.component';
import { RouterModule } from '@angular/router';

@NgModule({
 declarations: [
    ShowSubscribedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShowSubscribedModule,
    NgIf

  ],


})
export class ShowSubscribedModule { }
