import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../authentication/login/services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public jwt: string;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('jwt') != null) {
      AuthService.saveJwtStorage(this.route.snapshot.paramMap.get('jwt'));
    }
  }
}
