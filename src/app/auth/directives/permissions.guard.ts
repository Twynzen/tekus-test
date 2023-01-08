import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth/services/auth-services.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  loggedIn = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if (this.loggedUser()) {
     return true;
   }else{
    alert('Inicia sesión primero');
     this.router.navigate(['/sign-in']);
     return false;
   }
  }

  loggedUser(): boolean{
    const globalToken = localStorage.getItem('globalToken');
    this.loggedIn = globalToken ? true : false;
    console.log(globalToken,"asd");

    return this.loggedIn;
  }

}
