import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router /* Route */ } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate {

  constructor(private autenticacionService: AutenticacionService,
            private router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  //   return this.autenticacionService.isAuthenticated();
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.autenticacionService.isAuthenticated()) {
      return true;
    } else {
    this.router.navigate(['/login']);
      return false;
    }
  }
}
