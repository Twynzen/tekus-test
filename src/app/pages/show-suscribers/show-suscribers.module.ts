import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSuscribersComponent } from './show-suscribers.component';
import { ShowSuscribersModule } from './show-suscribers-routing.module';



@NgModule({
  declarations: [
    ShowSuscribersComponent
  ],
  imports: [
    CommonModule,
    ShowSuscribersModule

  ]
})
export class HomeModule { }
