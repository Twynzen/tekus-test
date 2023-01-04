import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowSuscribersComponent } from './show-suscribers.component';

const routes: Routes = [{ path: '', component: ShowSuscribersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowSuscribersModule { }
