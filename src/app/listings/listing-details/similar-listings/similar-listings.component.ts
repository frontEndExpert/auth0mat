import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-listings',
  templateUrl: './similar-listings.component.html',
  styleUrls: ['./similar-listings.component.scss']
})
export class SimilarListingsComponent implements OnInit {
  aLongStr = 'Apple Macbook Pro 15" (Late 2013) i7 2.3 GHz, 16GB Ram, 256 GB';

  constructor() { }

  ngOnInit() {
  }

}
