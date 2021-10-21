import { ProjectModel, ProjectsAdminModel, ProjectsCollaboratorsModel } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: ProjectModel;
  public projectAdmin:ProjectsAdminModel[] = [];
  public projectCollaborator: ProjectsCollaboratorsModel[] = [];

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
     this.getProject();
  }

  getProject(){
    this.projectService.getProjectByID('PROJ7').subscribe((result:ProjectModel)=>{
      this.project = result;
      console.log('Projeto',this.project)
      this.listAdmin(this.project.idProject);
      this.getCollaborator(this.project.idProject);
    })
  }

  listAdmin(idProject){
    this.projectService.getAdminByProject(idProject).subscribe((result:ProjectsAdminModel[])=>{
      this.projectAdmin = result;
      console.log('Admin',this.projectAdmin)
    })
  }

  getCollaborator(idProject){
    this.projectService.getCollaboratorByProject(idProject).subscribe((result:ProjectsCollaboratorsModel[]) =>{
      this.projectCollaborator = result;
      console.log('Colaborador',this.projectCollaborator)
    })
  }

}
