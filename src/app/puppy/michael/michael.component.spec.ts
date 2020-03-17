/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MichaelComponent } from './michael.component';

describe('MichaelComponent', () => {
  let component: MichaelComponent;
  let fixture: ComponentFixture<MichaelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichaelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
