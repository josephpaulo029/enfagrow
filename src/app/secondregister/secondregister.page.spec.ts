import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondregisterPage } from './secondregister.page';

describe('SecondregisterPage', () => {
  let component: SecondregisterPage;
  let fixture: ComponentFixture<SecondregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondregisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
