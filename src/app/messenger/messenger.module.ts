import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './messenger.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PeopleComponent } from './sidebar/people/people.component';
import { MessageInterfaceComponent } from './message-interface/message-interface.component';
import {SearchComponent} from "./sidebar/search/search.component";

@NgModule({
  imports: [
    CommonModule,
    MessengerRoutingModule
  ],
  declarations: [MessengerComponent, SidebarComponent, PeopleComponent, MessageInterfaceComponent, SearchComponent]
})
export class MessengerModule { }
