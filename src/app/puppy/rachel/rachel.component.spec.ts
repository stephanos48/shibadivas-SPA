/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RachelComponent } from './rachel.component';

describe('RachelComponent', () => {
  let component: RachelComponent;
  let fixture: ComponentFixture<RachelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RachelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RachelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
