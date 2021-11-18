import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  panelOpenState = false;
  @Input() admin: boolean;
  @Input() name: string;
  @Input() user: string
  projectList
  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    console.log(this.admin)
    this.getProjects();
  }

  goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

  getProjects(){
    if (this.admin){
      this.projectService.getProjectByAdmin('70c75c04').subscribe(data =>{
        this.projectList = data;
        console.log('projetos do admin',this.projectList);
      })
    }
    else{
      this.projectService.getProjectByCollaborator('b62193dc').subscribe(data =>{
        this.projectList = data;
        console.log('projetos do colaborador',this.projectList);
      })
    }
  }
}
