import {Component, Input, OnInit} from '@angular/core';
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {MatStepper} from "@angular/material";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss']
})
export class CoverPhotoComponent implements OnInit {
  @Input('stepperInstance') stepper;

  dzConfig: DropzoneConfigInterface = environment.config;

  constructor() { }

  ngOnInit() {
  }

  nextStep(stepper: MatStepper) {
    stepper.next();
  }

}
