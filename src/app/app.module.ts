import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
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
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'import',
      pathMatch: 'full'
    }]),
    // Custom App Modules
    AuthModule,
    ListingsModule,
    MessengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
