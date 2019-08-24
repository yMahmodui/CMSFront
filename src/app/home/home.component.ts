import { Component, OnInit } from "@angular/core";

import { Post } from "../models/post";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public post: Post;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.GetPost().subscribe(
      result => {
        if (result.is_successful) {
          this.post = result.data;
        }
      },
      error => {}
    );
  }
}
