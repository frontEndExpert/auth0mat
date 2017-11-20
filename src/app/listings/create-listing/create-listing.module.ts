import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateListingRoutingModule } from './create-listing-routing.module';
import {ImportListingComponent} from "./import-listing/import-listing.component";
import {ApplyFilterComponent} from "./post-listing/apply-filter/apply-filter.component";
import {CoverPhotoComponent} from "./post-listing/cover-photo/cover-photo.component";
import {SetDetailsComponent} from "./post-listing/set-details/set-details.component";
import {ListPostComponent} from "./post-listing/list-post/list-post.component";
import {PostListingComponent} from "./post-listing/post-listing.component";
import {DropzoneModule} from "ngx-dropzone-wrapper";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import { CreateListingComponent } from './create-listing.component';
import {TopListingsComponent} from "./import-listing/top-listings/top-listings.component";

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    AngularMaterialModule,
    CreateListingRoutingModule
  ],
  declarations: [
    ImportListingComponent,
    ApplyFilterComponent,
    CoverPhotoComponent,
    SetDetailsComponent,
    ListPostComponent,
    PostListingComponent,
    CreateListingComponent,
    TopListingsComponent
  ]
})
export class CreateListingModule { }
