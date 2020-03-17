/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThedivasComponent } from './thedivas.component';

describe('ThedivasComponent', () => {
  let component: ThedivasComponent;
  let fixture: ComponentFixture<ThedivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThedivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThedivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
