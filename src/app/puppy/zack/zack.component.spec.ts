/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZackComponent } from './zack.component';

describe('ZackComponent', () => {
  let component: ZackComponent;
  let fixture: ComponentFixture<ZackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
