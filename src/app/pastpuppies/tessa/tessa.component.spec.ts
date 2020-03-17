/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TessaComponent } from './tessa.component';

describe('TessaComponent', () => {
  let component: TessaComponent;
  let fixture: ComponentFixture<TessaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
