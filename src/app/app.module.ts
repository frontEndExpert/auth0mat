import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';

import {RouterModule} from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

import {ListingsModule} from "./listings/listings.module";
import {AuthModule} from "./auth/auth.module";
import {MessengerModule} from "./messenger/messenger.module";

import { FromNowPipe } from './global/pipes/from-now.pipe';
import { DateTimePickerComponent } from './global/date-time-picker/date-time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FromNowPipe
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'import', pathMatch: 'full' }
    ]),
    // Custom App Modules
    AuthModule,
    ListingsModule,
    MessengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
