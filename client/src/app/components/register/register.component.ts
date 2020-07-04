import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { LoginService } from "../../services/login.service";

declare var M: any;

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  errors: any;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  addUser(form: NgForm) {
    this.loginService.postUser(form.value).subscribe((res) => {
      if (!res.success) {
        M.toast({ html: res.status });
      } else {
        this.resetForm(form);
        M.toast({ html: "You are registered" });
        this.router.navigate([""]);
      }
    });
  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.loginService.selectedUser = new User();
    }
  }
}
