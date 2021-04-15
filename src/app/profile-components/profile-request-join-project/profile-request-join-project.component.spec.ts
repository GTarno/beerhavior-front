import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRequestJoinProjectComponent } from './profile-request-join-project.component';

describe('ProfileRequestJoinProjectComponent', () => {
  let component: ProfileRequestJoinProjectComponent;
  let fixture: ComponentFixture<ProfileRequestJoinProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRequestJoinProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRequestJoinProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
