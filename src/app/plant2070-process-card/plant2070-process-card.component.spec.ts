/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Plant2070ProcessCardComponent } from './plant2070-process-card.component';

describe('Plant2070ProcessCardComponent', () => {
  let component: Plant2070ProcessCardComponent;
  let fixture: ComponentFixture<Plant2070ProcessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plant2070ProcessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plant2070ProcessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
