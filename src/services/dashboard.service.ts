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

  getProject(projectId):Observable<any>{
    const params = { project: projectId }
    return this.http.get(`${environment.hubUrl}dashboard/project`, { params: params });
  }

  getCollaborator(collaboratorId: string){
    const params ={ collaborator: collaboratorId  }
    return this.http.get(`${environment.hubUrl}dashboard/collaborator`, { params: params });
  }

  getProjectTotalScore(projectId):Observable<any> {
    const params = { project: projectId }
    return this.http.get(`${environment.hubUrl}dashboard/project/total-score`, { params: params });
  }
}
