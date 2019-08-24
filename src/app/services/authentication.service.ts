import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Md5 } from "ts-md5/dist/md5";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { User } from "../models/user";
import { HttpRequestResult } from "../models/http-request-result";

import { SettingsService } from "../services/settings.service";
import { LogManagerService } from "../services/log-manager.service";
import { Utility } from "../infrastructure/utility";
import { Users } from '../models/users';
import { Post } from '../models/post';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService,
    private logManagerService: LogManagerService
  ) {
    this.currentUser = null;
  }

  public currentUser: User;

  public login(
    username: string,
    password: string
  ): Observable<HttpRequestResult<User>> {
    let requestUrl: string = this.settingsService.url + "Authorization/Login";

    const md5 = new Md5();
    let requestData = { email: username, hash: md5.appendStr(password).end() };

    return this.http
      .post<HttpRequestResult<User>>(
        requestUrl,
        requestData,
        this.settingsService.httpOptions
      )
      .pipe(
        map(result => {
          Utility.Log(this.logManagerService, result);

          this.currentUser = result.data;

          return result;
        })
      );
  }

  public Register(
    username: string,
    password: string
  ): Observable<HttpRequestResult<User>> {
    let requestUrl: string =
      this.settingsService.url + "Authorization/Register";

    const md5 = new Md5();
    let requestData = { email: username, hash: md5.appendStr(password).end() };

    return this.http
      .post<HttpRequestResult<User>>(
        requestUrl,
        requestData,
        this.settingsService.httpOptions
      )
      .pipe(
        map(result => {
          Utility.Log(this.logManagerService, result);

          this.currentUser = result.data;

          return result;
        })
      );
  }

  public GetAllUsers(): Observable<HttpRequestResult<Users>> {
    let requestUrl: string = this.settingsService.url + "Admin/GetRegisteredUsers";

    let requestData = null;

    return this.http
      .post<HttpRequestResult<Users>>(
        requestUrl,
        requestData,
        this.settingsService.httpOptions
      )
      .pipe(
        map(result => {
          Utility.Log(this.logManagerService, result);

          return result;
        })
      );
  }

  public GetPost(): Observable<HttpRequestResult<Post>> {
    let requestUrl: string = this.settingsService.url + "Home/GetPost";

    let requestData = null;

    return this.http
      .post<HttpRequestResult<Post>>(
        requestUrl,
        requestData,
        this.settingsService.httpOptions
      )
      .pipe(
        map(result => {
          Utility.Log(this.logManagerService, result);

          return result;
        })
      );
  }

  public logout(): void {
    this.currentUser = null;
  }
}
