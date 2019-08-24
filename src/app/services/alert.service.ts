import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private router: Router) {

    this.subject = new Subject<any>();
    this.keepAfterRouteChange = false;

    // Clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {

        if (this.keepAfterRouteChange) {

          // Only keep for a single route change
          this.keepAfterRouteChange = false;

        } else {

          // Clear alert message
          this.clear();

        }

      }

    });

  }

  // https://rxjs-dev.firebaseapp.com/guide/overview
  private subject: Subject<any>;
  private keepAfterRouteChange: boolean;

  public getAlert(): Observable<any> {

    return this.subject.asObservable();

  }

  public success(message: string, keepAfterRouteChange = false): void {

    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });

  }

  public error(message: string, keepAfterRouteChange = false): void {

    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });

  }

  public clear(): void {

    // Clear by calling subject.next() without parameters
    this.subject.next();

  }

}
