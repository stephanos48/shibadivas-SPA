/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PuppyComponent } from './puppy.component';

describe('PuppyComponent', () => {
  let component: PuppyComponent;
  let fixture: ComponentFixture<PuppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
