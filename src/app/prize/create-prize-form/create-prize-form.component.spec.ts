import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrizeFormComponent } from './create-prize-form.component';

describe('CreatePrizeFormComponent', () => {
  let component: CreatePrizeFormComponent;
  let fixture: ComponentFixture<CreatePrizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrizeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
