import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router:Router,private hardcodedService:HardcodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedService.isUserLoggedIn())
    return true;

  this.router.navigate(['login']);

  return false;
}
}
