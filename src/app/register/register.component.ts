import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "../models/user";
import { HttpRequestResult } from "../models/http-request-result";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.user = new User();
  }

  public user: User;
  public returnUrl: string;
  public result: HttpRequestResult<User>;

  ngOnInit() {}

  public onSubmit(): void {
    this.authenticationService
      .Register(this.user.email, this.user.password)
      .subscribe(
        result => {
          this.result = result;

          if (this.result.is_successful) {
            this.router.navigate(["/"]);
          }
        },
        error => {}
      );
  }
}
