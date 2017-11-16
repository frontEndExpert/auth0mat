import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from "@angular/material";

@NgModule({
  imports: [
    MatStepperModule
  ],
  exports: [
    MatStepperModule
  ]
})
export class AngularMaterialModule { }
