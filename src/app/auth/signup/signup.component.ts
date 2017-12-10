import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) { 
    
  }

  ngOnInit() {
  }

}
