/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErinComponent } from './erin.component';

describe('ErinComponent', () => {
  let component: ErinComponent;
  let fixture: ComponentFixture<ErinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
