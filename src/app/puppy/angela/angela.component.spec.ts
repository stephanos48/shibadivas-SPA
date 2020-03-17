/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngelaComponent } from './angela.component';

describe('AngelaComponent', () => {
  let component: AngelaComponent;
  let fixture: ComponentFixture<AngelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
