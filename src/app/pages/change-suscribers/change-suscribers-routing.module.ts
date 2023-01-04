import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChangeSuscribersComponent } from './change-suscribers.component';

const routes: Routes = [{ path: '', component: ChangeSuscribersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeSuscribersModule { }
