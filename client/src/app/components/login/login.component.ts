import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

declare var M: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((res) => {
        if (res.success) {
          localStorage.setItem("token", JSON.stringify(res.token));
          M.toast({ html: res.status });
          this.router.navigate(["dashboard"]);
        } else {
          M.toast({ html: res.status });
        }
      });
  }
}
