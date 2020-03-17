/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrunoComponent } from './bruno.component';

describe('BrunoComponent', () => {
  let component: BrunoComponent;
  let fixture: ComponentFixture<BrunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
