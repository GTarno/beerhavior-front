import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendencyAprovalComponent } from './pendency-aproval.component';

describe('PendencyAprovalComponent', () => {
  let component: PendencyAprovalComponent;
  let fixture: ComponentFixture<PendencyAprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendencyAprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendencyAprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
