/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PennyComponent } from './penny.component';

describe('PennyComponent', () => {
  let component: PennyComponent;
  let fixture: ComponentFixture<PennyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PennyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
