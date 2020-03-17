/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeidiComponent } from './heidi.component';

describe('HeidiComponent', () => {
  let component: HeidiComponent;
  let fixture: ComponentFixture<HeidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
