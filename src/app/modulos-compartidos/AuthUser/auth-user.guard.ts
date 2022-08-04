import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if( (sessionStorage.getItem('usuario') != null) && (sessionStorage.getItem('contraseña') != null ) ){
        return true;
      }else{
        console.log("contraseñas invalidas")
        return this.router.navigateByUrl('login');
      }
  }

}
