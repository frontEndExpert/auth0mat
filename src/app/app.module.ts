import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { ImportListingComponent } from './listings/create-listing/import-listing/import-listing.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './base/login/login.component';
import { SignupComponent } from './base/signup/signup.component';
import { ForgotPasswordComponent } from './base/login/forgot-password/forgot-password.component';
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {ListingsModule} from "./listings/listings.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DropzoneModule,
    RouterModule.forRoot([
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]),

    ListingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
