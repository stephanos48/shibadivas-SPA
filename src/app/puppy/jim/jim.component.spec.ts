/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JimComponent } from './jim.component';

describe('JimComponent', () => {
  let component: JimComponent;
  let fixture: ComponentFixture<JimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
