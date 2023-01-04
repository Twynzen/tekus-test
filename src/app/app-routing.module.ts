import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/show-suscribers', pathMatch: 'full' },
  { path: 'show-suscribers', loadChildren: () => import('src/app/pages/show-suscribers/show-suscribers-routing.module').then(m => m.ShowSuscribersModule) },
  { path: 'sign-in', loadChildren: () => import('src/app/auth/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('src/app/auth/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '**', redirectTo: '/show-suscribers', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
