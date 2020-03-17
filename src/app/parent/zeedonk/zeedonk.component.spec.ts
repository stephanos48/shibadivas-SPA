/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZeedonkComponent } from './zeedonk.component';

describe('ZeedonkComponent', () => {
  let component: ZeedonkComponent;
  let fixture: ComponentFixture<ZeedonkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeedonkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeedonkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
