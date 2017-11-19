import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingDetailsComponent} from "./listing-details/listing-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listings',
    pathMatch: 'full'
  },
  {
    path: 'listings',
    children: [
      {
        path: 'details',
        component: ListingDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingsRoutingModule { }
