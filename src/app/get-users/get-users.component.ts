import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "get-users",
  templateUrl: "./get-users.component.html",
  styleUrls: ["./get-users.component.css"]
})
export class GetUsersComponent implements OnInit {
  users: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    // Redirect to login
    if (
      !this.authenticationService.currentUser ||
      this.authenticationService.currentUser.role_id != 1
    ) {
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit() {
    this.authenticationService.GetAllUsers().subscribe(
      result => {
        if (result.is_successful) {
          this.users = result.data.users;
        }
      },
      error => {}
    );
  }
}
