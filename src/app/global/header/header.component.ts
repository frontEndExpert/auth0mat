import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidenavActive = false;

  constructor(private router: Router, public auth: AuthService) { 
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  showHeader() {
    return !(this.router.url.indexOf('login') !== -1 || this.router.url.indexOf('signup') !== -1);
  }

}
