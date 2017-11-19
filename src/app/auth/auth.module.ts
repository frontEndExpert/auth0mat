import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ]
})
export class AuthModule { }
