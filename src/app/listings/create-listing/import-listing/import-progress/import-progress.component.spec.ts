import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProgressComponent } from './import-progress.component';

describe('ImportProgressComponent', () => {
  let component: ImportProgressComponent;
  let fixture: ComponentFixture<ImportProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
