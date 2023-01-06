import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowSubscribedComponent } from './show-subscribed.component';

const routes: Routes = [{ path: '', component: ShowSubscribedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule]
})
export class ShowSubscribedRoutingModule { }
