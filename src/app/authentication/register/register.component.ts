import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less', '../authentification.component.less']
})
export class RegisterComponent {

  constructor() {
  }

  registerGmail() {
    window.location.href = environment.uriBackend + '/auth/google';
  }

  registerFacebook() {
    window.location.href = environment.uriBackend + '/auth/facebook';
  }
}
