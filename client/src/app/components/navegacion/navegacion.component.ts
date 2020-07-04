import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

declare var M: any;

@Component({
  selector: "app-navegacion",
  templateUrl: "./navegacion.component.html",
  styleUrls: ["./navegacion.component.css"],
})
export class NavegacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem('token');
  }
}
