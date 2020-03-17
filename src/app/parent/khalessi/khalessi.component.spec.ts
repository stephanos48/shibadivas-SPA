/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KhalessiComponent } from './khalessi.component';

describe('KhalessiComponent', () => {
  let component: KhalessiComponent;
  let fixture: ComponentFixture<KhalessiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhalessiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhalessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
