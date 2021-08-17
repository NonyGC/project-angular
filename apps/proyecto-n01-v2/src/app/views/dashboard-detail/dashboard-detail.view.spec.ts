import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailView } from './dashboard-detail.view';

describe('DashboardDetailView', () => {
  let component: DashboardDetailView;
  let fixture: ComponentFixture<DashboardDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
