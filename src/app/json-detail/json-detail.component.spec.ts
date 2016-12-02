/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonDetailComponent } from './json-detail.component';

describe('JsonDetailComponent', () => {
  let component: JsonDetailComponent;
  let fixture: ComponentFixture<JsonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
