import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeSuscribersComponent } from './change-suscribers.component';
import { ChangeSuscribersModule } from './change-suscribers-routing.module';



@NgModule({
  declarations: [
    ChangeSuscribersComponent
  ],
  imports: [
    CommonModule,
    ChangeSuscribersModule

  ]
})
export class HomeModule { }
