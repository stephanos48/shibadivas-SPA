/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastpuppiesComponent } from './pastpuppies.component';

describe('PastpuppiesComponent', () => {
  let component: PastpuppiesComponent;
  let fixture: ComponentFixture<PastpuppiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastpuppiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastpuppiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
