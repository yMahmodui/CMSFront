import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { LogManagerService } from '../services/log-manager.service';
import { AuthenticationService } from '../services/authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private logManagerService: LogManagerService,
    private authenticationService: AuthenticationService,
  ) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (
      (this.authenticationService.currentUser === undefined) ||
      (this.authenticationService.currentUser === null)
    ) {

      // Navigate to login page
      this.router.navigate(['/login']);

      return false;

    }

    return true;

  }

}
