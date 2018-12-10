import {Component, OnInit} from '@angular/core';
import {AuthService} from "../authentication/login/services/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {}

  isConnected(): boolean {
    return !AuthService.isConnect;
  }

  logout() {
    this.authService.logout();
  }
}
