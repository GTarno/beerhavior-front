import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeTableComponent } from './prize-table.component';

describe('PrizeTableComponent', () => {
  let component: PrizeTableComponent;
  let fixture: ComponentFixture<PrizeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
