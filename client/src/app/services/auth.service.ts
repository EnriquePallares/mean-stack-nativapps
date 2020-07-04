import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class AuthService{


  readonly URL_API = '/api/users/verifySession'
  headers = new Headers()
  constructor(private http: Http, private router: Router) {
    this.headers.append("Content-Type", "application/json")
    this.headers.append("token", JSON.parse(localStorage.getItem("token")))
  }

  canActivate() {
    let isLogged;
    this.http.get(this.URL_API, { headers: this.headers })
    .map((response: Response) => response.json())
    .subscribe(res =>{
      isLogged = res.success
      if(!isLogged) this.router.navigate(["/"])
    })
  }

}
