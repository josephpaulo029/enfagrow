import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglistPage } from './reglist.page';

describe('ReglistPage', () => {
  let component: ReglistPage;
  let fixture: ComponentFixture<ReglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
