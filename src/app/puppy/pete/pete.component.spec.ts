/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeteComponent } from './pete.component';

describe('PeteComponent', () => {
  let component: PeteComponent;
  let fixture: ComponentFixture<PeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
