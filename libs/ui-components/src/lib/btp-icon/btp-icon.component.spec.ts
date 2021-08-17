/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtpIconComponent } from './btp-icon.component';

describe('BtpIconComponent', () => {
  let component: BtpIconComponent;
  let fixture: ComponentFixture<BtpIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtpIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
