import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getProjectTotalScore(projectId):Observable<any> {
    const params = { project: projectId }
    return this.http.get(`${environment.hubUrl}dashboard/project`, { params: params });
  }
}
