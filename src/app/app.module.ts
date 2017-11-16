import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { ImportListingComponent } from './base/import-listing/import-listing.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './base/login/login.component';
import { SignupComponent } from './base/signup/signup.component';
import { ForgotPasswordComponent } from './base/login/forgot-password/forgot-password.component';
import { PostListingComponent } from './listings/post-listing/post-listing.component';
import { CoverPhotoComponent } from './listings/post-listing/cover-photo/cover-photo.component';
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {ApplyFilterComponent} from "./listings/post-listing/apply-filter/apply-filter.component";
import { SetDetailsComponent } from './listings/post-listing/set-details/set-details.component';
import { ListPostComponent } from './listings/post-listing/list-post/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImportListingComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    PostListingComponent,
    CoverPhotoComponent,
    ApplyFilterComponent,
    SetDetailsComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DropzoneModule,
    RouterModule.forRoot([
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', component: ImportListingComponent }
    ]),
    RouterModule.forChild([
      { path: 'listings/post-listing', component: PostListingComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
