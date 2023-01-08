import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from '@auth/directives/exit.guard';
import { PermissionsGuard } from '@auth/directives/permissions.guard';

const routes: Routes = [
  { path: '', redirectTo: '/show-subscribed', pathMatch: 'full' },
  {
    path: 'show-subscribed', loadChildren: () => import('src/app/pages/show-subscribed/show-subscribed.module').then(m => m.ShowSubscribedModule), canActivate:[PermissionsGuard], canDeactivate: [ExitGuard]
},
  { path: 'sign-in', loadChildren: () => import('src/app/auth/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('src/app/auth/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '**', redirectTo: '/show-subscribed', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
