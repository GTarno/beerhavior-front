import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
}
