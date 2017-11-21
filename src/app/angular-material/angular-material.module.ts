import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule, MatProgressBarModule} from "@angular/material";

@NgModule({
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class AngularMaterialModule { }
