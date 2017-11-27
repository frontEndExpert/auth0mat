import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessengerComponent} from "./messenger.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MessageInterfaceComponent} from "./message-interface/message-interface.component";

const routes: Routes = [
  {
    path: 'messenger',
    component: MessengerComponent,
    children: [
      {
        path: '',
        component: MessageInterfaceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
