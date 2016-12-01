/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonListComponent } from './json-list.component';

describe('JsonListComponent', () => {
  let component: JsonListComponent;
  let fixture: ComponentFixture<JsonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
