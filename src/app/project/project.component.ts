import { ProjectModel } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: ProjectModel;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
     this.projectService.getProjectByID('PROJ6').subscribe((result:ProjectModel)=>{
      this.project = result
      console.log(this.project)
    })
  }

}
