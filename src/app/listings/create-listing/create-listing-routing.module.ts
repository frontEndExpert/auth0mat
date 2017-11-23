import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportListingComponent} from "./import-listing/import-listing.component";
import {PostListingComponent} from "./post-listing/post-listing.component";
import {CreateListingComponent} from "./create-listing.component";
import {ConnectPostComponent} from "./post-listing/connect-post/connect-post.component";

const routes: Routes = [
  {
    path: 'listings',
    component: CreateListingComponent,
    children: [
      {
        path: '',
        redirectTo: 'import',
        pathMatch: 'full'
      },
      {
        path: 'import',
        component: ImportListingComponent
      },
      {
        path: 'post/connect',
        component: ConnectPostComponent
      },
      {
        path: 'post',
        component: PostListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateListingRoutingModule { }
