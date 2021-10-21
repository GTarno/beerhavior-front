import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel } from 'src/models/project.model';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  createProject(data) {
    const payload = {
      nameProject: data.nameProject,
      codProject: data.codProject,
      linkGitProject: data.linkGitProject,
    };
    return this.http.post(`${environment.hubUrl}project`, payload);
  }

  listProject() {
    this.http.get(`${environment.hubUrl}project`).subscribe((data) => {
      console.log(data);
    });
  }

  associateProject(project,authorization){
    const header = new HttpHeaders({ Authorization: authorization });
    const payload = {
      project: project.project,
    };
    return this.http.post(
      `${environment.hubUrl}project/associate`,
      { params: payload },
      { headers: header }
    );
  }

  getAssociation() {
    this.http.get(`${environment.hubUrl}project/associate`).subscribe((data) => {
      console.log(data);
    });
  }

  getProjectByAdmin(id):Observable<any> {
    const params = { codAdmin: id }
    return this.http.get(`${environment.hubUrl}project/consultProject`, { params: params });
  }

  getAdminByProject(id):Observable<any> {
    const params = { codProject: id }
    return this.http.get(`${environment.hubUrl}project/consultAdmin`, { params: params });
  }

  getCollaboratorByProject(id):Observable<any> {
    const params = { codProject: id }
    return this.http.get(`${environment.hubUrl}project/consultColaborator`, { params: params });
  }

  getProjectByCollaborator(id):Observable<any> {
    const params = { codCollaborator: id }
    return this.http.get(`${environment.hubUrl}project/consultColaboratorProject`, { params: params });
  }

  updateProject(data, authorization) {
    const header = new HttpHeaders({ Authorization: authorization });
    const payload = {
      idProject: data.idProject,
      nameProject: data.nameProject,
      codProject: data.codProject,
      linkGitProject: data.linkGitProject,
    }
    return this.http.put(
      `${environment.hubUrl}project`,
      { params: payload },
      { headers: header }
    );
  }

  getProjectByID(id):Observable<any>{
    return this.http.get(`${environment.hubUrl}project/${id}`)
  }

  // TODO
  // deleteProject(id, authorization) {
  //   const header = new HttpHeaders({ Authorization: authorization})
  //   const idProject = id
  //   return this.http.delete(
  //     `${environment.hubUrl}project`,
  //     { params: idProject },
  //     { headers: header }
  //   );
  // }


}
