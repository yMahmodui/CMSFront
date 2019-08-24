import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { User } from "../models/user";
import { Error } from "../models/error";
import { HttpRequestResult } from "../models/http-request-result";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    // Redirect to home if already logged in
    if (this.authenticationService.currentUser) {
      this.router.navigate(["/"]);
    }

    this.user = new User();
  }

  public user: User;
  public error: Error;
  public returnUrl: string;
  public result: HttpRequestResult<User>;

  ngOnInit() {}

  public onSubmit(): void {
    this.authenticationService
      .login(this.user.email, this.user.password)
      .subscribe(
        result => {
          this.result = result;

          if (this.result.is_successful) {
            this.router.navigate(["/"]);
          }

          this.error = { has_error: true, error_message: result.error_message };
        },
        error => {}
      );
  }
}
