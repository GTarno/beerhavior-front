import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeTableItensComponent } from './prize-table-itens.component';

describe('PrizeTableItensComponent', () => {
  let component: PrizeTableItensComponent;
  let fixture: ComponentFixture<PrizeTableItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeTableItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeTableItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
