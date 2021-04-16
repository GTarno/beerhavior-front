import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPrizeFormComponent } from './redeem-prize-form.component';

describe('RedeemPrizeFormComponent', () => {
  let component: RedeemPrizeFormComponent;
  let fixture: ComponentFixture<RedeemPrizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemPrizeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemPrizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
