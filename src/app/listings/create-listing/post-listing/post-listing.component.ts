import { Component, OnInit } from '@angular/core';
import {MatStepper} from "@angular/material";

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  progressValue = 25;

  constructor() { }

  ngOnInit() {
  }

  nextStep(progress: number) {
    this.progressValue = progress;
  }

}
