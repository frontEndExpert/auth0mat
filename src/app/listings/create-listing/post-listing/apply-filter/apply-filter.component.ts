import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatStepper} from "@angular/material";

@Component({
  selector: 'app-apply-filter',
  templateUrl: './apply-filter.component.html',
  styleUrls: ['./apply-filter.component.scss']
})
export class ApplyFilterComponent implements OnInit {

  @Input('stepper') stepper: MatStepper;

  @Output()
  stepProgress = new EventEmitter<number>();

  nextStep() {
    this.stepper.next();
    this.stepProgress.emit(75);
  }

  previousStep() {
    this.stepper.previous();
    this.stepProgress.emit(25);
  }

  constructor() { }

  ngOnInit() {
  }

}
