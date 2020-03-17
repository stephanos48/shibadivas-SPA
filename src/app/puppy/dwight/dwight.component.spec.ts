/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DwightComponent } from './dwight.component';

describe('DwightComponent', () => {
  let component: DwightComponent;
  let fixture: ComponentFixture<DwightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
