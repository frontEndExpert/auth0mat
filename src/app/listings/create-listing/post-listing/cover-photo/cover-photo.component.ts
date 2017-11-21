import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {environment} from "../../../../../environments/environment";
import {MatStepper} from "@angular/material";

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss']
})
export class CoverPhotoComponent implements OnInit {
  @Input('stepper') stepper: MatStepper;

  @Output()
  stepProgress = new EventEmitter<number>();

  dzConfig: DropzoneConfigInterface = environment.config;

  nextStep() {
    this.stepper.next();
    this.stepProgress.emit(50);
  }

  constructor() { }

  ngOnInit() {
  }

}
