/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChandlerComponent } from './chandler.component';

describe('ChandlerComponent', () => {
  let component: ChandlerComponent;
  let fixture: ComponentFixture<ChandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
