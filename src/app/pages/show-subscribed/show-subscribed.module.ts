import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ShowSubscribedComponent } from './show-subscribed.component';
import { RouterModule } from '@angular/router';
import { ShowSubscribedRoutingModule } from './show-subscribed-routing.module';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
 declarations: [
    ShowSubscribedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShowSubscribedRoutingModule,


  ],
  exports:[
    ShowSubscribedComponent
  ]


})
export class ShowSubscribedModule { }
