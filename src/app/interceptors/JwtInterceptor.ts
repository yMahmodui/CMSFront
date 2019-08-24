import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { LogManagerService } from '../services/log-manager.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private logManagerService: LogManagerService,
        private authenticationService: AuthenticationService,
    ) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Add authorization header with jwt token if available
        let currentUser =
            this.authenticationService.currentUser;

        if (currentUser && currentUser.access_token) {

            request =
                request.clone({
                    setHeaders: {
                        token: currentUser.access_token
                    }
                });

        }

        return next.handle(request);

    }

}