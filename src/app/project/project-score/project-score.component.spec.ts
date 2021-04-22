import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectScoreComponent } from './project-score.component';

describe('ProjectScoreComponent', () => {
  let component: ProjectScoreComponent;
  let fixture: ComponentFixture<ProjectScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
