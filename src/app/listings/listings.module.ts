import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import {CreateListingModule} from "./create-listing/create-listing.module";
import {ListingDetailsComponent} from "./listing-details/listing-details.component";
import {DetailsHeaderComponent} from "./listing-details/details-header/details-header.component";
import {DetailsFaqComponent} from "./listing-details/details-faq/details-faq.component";
import {DetailsReviewsComponent} from "./listing-details/details-reviews/details-reviews.component";
import {SimilarListingsComponent} from "./listing-details/similar-listings/similar-listings.component";
import {StarRatingModule} from "angular-star-rating";
import {TruncatePipe} from "../global/pipes/truncate.pipe";
import { DetailsImageAndMapComponent } from './listing-details/details-image-and-map/details-image-and-map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ListingsRoutingModule,
    CreateListingModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  declarations: [
    ListingDetailsComponent,
    DetailsHeaderComponent,
    DetailsFaqComponent,
    DetailsReviewsComponent,
    SimilarListingsComponent,

    TruncatePipe,

    DetailsImageAndMapComponent
  ],
  entryComponents: []
})
export class ListingsModule { }
