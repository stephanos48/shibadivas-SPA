/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoeyComponent } from './joey.component';

describe('JoeyComponent', () => {
  let component: JoeyComponent;
  let fixture: ComponentFixture<JoeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
