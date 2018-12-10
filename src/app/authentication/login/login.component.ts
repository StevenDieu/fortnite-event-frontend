import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less', '../authentification.component.less']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  loginGmail() {
    window.location.href = environment.uriBackend + '/auth/google';
  }

  loginFacebook() {
    window.location.href = environment.uriBackend + '/auth/facebook';
  }
}
