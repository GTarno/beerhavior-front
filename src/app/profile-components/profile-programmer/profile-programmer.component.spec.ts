import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProgrammerComponent } from './profile-programmer.component';

describe('ProfileProgrammerComponent', () => {
  let component: ProfileProgrammerComponent;
  let fixture: ComponentFixture<ProfileProgrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProgrammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
