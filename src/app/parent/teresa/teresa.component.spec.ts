/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeresaComponent } from './teresa.component';

describe('TeresaComponent', () => {
  let component: TeresaComponent;
  let fixture: ComponentFixture<TeresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
