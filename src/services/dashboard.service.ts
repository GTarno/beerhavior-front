import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  constructor(
    private http: HttpClient
  ) { }

  getProject(projectId: number){
    const payload={
      project: projectId
    }
    return this.http.post(`${environment.hubUrl}dashboard/project`, payload);
  }

  getCollaborator(collaboratorId: string){
    const payload={
      collaborator: collaboratorId
    }
    return this.http.post(`${environment.hubUrl}dashboard/collaborator`, payload);
  }
}
