import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-listing',
  templateUrl: './import-listing.component.html',
  styleUrls: ['./import-listing.component.scss']
})
export class ImportListingComponent implements OnInit {

  importError = false;

  constructor() { }

  ngOnInit() {
  }

  importListing() {
    this.importError = !this.importError;
  }

  importIcon() {
    if (this.importError) {
      return 'assets/icons/link_red.svg';
    }

    return 'assets/icons/link.svg';
  }

}
