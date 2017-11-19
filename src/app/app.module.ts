import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {RouterModule} from "@angular/router";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {ListingsModule} from "./listings/listings.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DropzoneModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'import',
      pathMatch: 'full'
    }]),

    AuthModule,
    ListingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
