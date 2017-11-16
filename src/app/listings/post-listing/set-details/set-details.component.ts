import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.scss']
})
export class SetDetailsComponent implements OnInit {

  images = ["assets/images/sample-product.png", "assets/images/sample-product.png", "", "", ""];
  dzConfig: DropzoneConfigInterface = environment.config;

  constructor() { }

  ngOnInit() {
  }

}
