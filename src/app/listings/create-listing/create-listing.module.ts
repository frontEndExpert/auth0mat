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
import { ImportErrorComponent } from './import-listing/import-error/import-error.component';
import { ImportProgressComponent } from './import-listing/import-progress/import-progress.component';
import { PostListedComponent } from './post-listing/post-listed/post-listed.component';
import { ConnectPostComponent } from './post-listing/connect-post/connect-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ResponsiveModule} from "ng2-responsive";

@NgModule({
  imports: [
    CommonModule,
    DropzoneModule,
    AngularMaterialModule,
    CreateListingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ResponsiveModule
  ],
  declarations: [
    ImportListingComponent,
    ApplyFilterComponent,
    CoverPhotoComponent,
    SetDetailsComponent,
    ListPostComponent,
    PostListingComponent,
    CreateListingComponent,
    TopListingsComponent,
    ImportErrorComponent,
    ImportProgressComponent,
    PostListedComponent,
    ConnectPostComponent
  ]
})
export class CreateListingModule { }
