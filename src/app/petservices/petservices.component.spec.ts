/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetservicesComponent } from './petservices.component';

describe('PetservicesComponent', () => {
  let component: PetservicesComponent;
  let fixture: ComponentFixture<PetservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
