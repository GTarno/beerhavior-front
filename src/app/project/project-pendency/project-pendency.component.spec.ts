import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPendencyComponent } from './project-pendency.component';

describe('ProjectPendencyComponent', () => {
  let component: ProjectPendencyComponent;
  let fixture: ComponentFixture<ProjectPendencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPendencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPendencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
