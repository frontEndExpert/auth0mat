import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ImportListingValidators} from "./import-listing.validators";

@Component({
  selector: 'app-import-listing',
  templateUrl: './import-listing.component.html',
  styleUrls: ['./import-listing.component.scss']
})
export class ImportListingComponent implements OnInit {

  form;

  importError = false;
  inProgress = false;
  progressValue = 0;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      craigslistLink: [
        '',
        Validators.required,
        ImportListingValidators.validLink
      ]
    });
  }

  ngOnInit() {
  }

  importListing() {
    if (!this.importError) {
      this.inProgress = true;
      setTimeout(() => {
        this.inProgress = false;
        this.importError = true;
      }, 5000);

      const interval = setInterval(() => {
        if (this.progressValue <= 40) {
          this.progressValue += 10;
        } else {
          this.progressValue = 0;
          (<any>window).clearInterval(interval);
        }
      }, 1000);
    } else {
      this.importError = false;
      this.inProgress = false;
      this.progressValue = 0;
    }
  }

  importIcon() {
    if (this.importError) {
      return 'assets/icons/link_red.svg';
    }

    return 'assets/icons/link.svg';
  }

}
