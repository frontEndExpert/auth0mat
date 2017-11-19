import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import {CreateListingModule} from "./create-listing/create-listing.module";

@NgModule({
  imports: [
    CommonModule,
    ListingsRoutingModule,
    CreateListingModule
  ],
  declarations: [],
  entryComponents: []
})
export class ListingsModule { }
