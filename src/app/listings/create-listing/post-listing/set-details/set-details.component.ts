import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {environment} from "../../../../../environments/environment";
import {MatStepper} from "@angular/material";

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.scss']
})
export class SetDetailsComponent implements OnInit {

  @Input('stepper') stepper: MatStepper;

  @Output()
  stepProgress = new EventEmitter<number>();

  images = ["assets/images/sample-product.png", "assets/images/sample-product.png", ""];
  dzConfig: DropzoneConfigInterface = environment.config;

  nextStep() {
    this.stepper.next();
    this.stepProgress.emit(100);
  }

  previousStep() {
    this.stepper.previous();
    this.stepProgress.emit(50);
  }

  constructor() { }

  ngOnInit() {
  }

}
