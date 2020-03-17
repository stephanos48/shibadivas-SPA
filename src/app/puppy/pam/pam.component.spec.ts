/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PamComponent } from './pam.component';

describe('PamComponent', () => {
  let component: PamComponent;
  let fixture: ComponentFixture<PamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
