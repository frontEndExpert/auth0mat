import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-import-progress',
  templateUrl: './import-progress.component.html',
  styleUrls: ['./import-progress.component.scss']
})
export class ImportProgressComponent implements OnInit {

  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

}
