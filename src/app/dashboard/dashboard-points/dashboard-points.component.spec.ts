import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPointsComponent } from './dashboard-points.component';

describe('DashboardPointsComponent', () => {
  let component: DashboardPointsComponent;
  let fixture: ComponentFixture<DashboardPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
