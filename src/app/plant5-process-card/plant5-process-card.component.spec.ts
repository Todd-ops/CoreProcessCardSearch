/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Plant5ProcessCardComponent } from './plant5-process-card.component';

describe('Plant5ProcessCardComponent', () => {
  let component: Plant5ProcessCardComponent;
  let fixture: ComponentFixture<Plant5ProcessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plant5ProcessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plant5ProcessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
