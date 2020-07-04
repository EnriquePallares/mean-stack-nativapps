import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { User } from "../models/user";

@Injectable()
export class LoginService {
  selectedUser: User;
  readonly URL_API = "/api/users";

  constructor(private http: Http) {
    this.selectedUser = new User();
  }

  isAuthenticated(): Boolean {
    let userData = localStorage.getItem("token");
    if (userData && JSON.parse(userData)) {
      return true;
    }
    return false;
  }

  login(email, password) {
    return this.http
      .post(this.URL_API + "/signin", { email: email, password: password})
      .map((response: Response) => response.json());
  }

  postUser(User: User) {
    return this.http
      .post(this.URL_API + "/signup", User)
      .map((response: Response) => response.json());
  }

  logout() {
    return this.http
      .get(this.URL_API + "/logout")
      .map((response: Response) => response.json());
  }
}
