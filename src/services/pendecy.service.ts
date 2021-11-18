import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { concatMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PendencyService {

  public totalScore: number

  constructor(private http: HttpClient) {}

  getTotalPendency(projectId){
    this.getCommitPendency(projectId).pipe(first()).subscribe(response => {
      this.getUserPendency(projectId).pipe(first()).subscribe(res => {
        console.log("commit", response);
        console.log("user", res);
        this.totalScore = res.length + response.length
        return this.totalScore;
      })
    })
  }

  getUserPendency(projectId):Observable<any> {
    const params = {project: projectId}
    return this.http.get(`${environment.hubUrl}pendency/user`, { params: params })
  }

  approveUser(id) {
    const user = { collaborator: id.collaboratorId };
    this.http.post(`${environment.hubUrl}pendency/approve-user`, user);
  }

  declineUser(id) {
    const user = { collaborator: id.collaboratorId };
    this.http.post(`${environment.hubUrl}pendency/decline-user`, user);
  }

  getCommitPendency(projectId):Observable<any> {
    const params = {project: projectId}
    return this.http.get(`${environment.hubUrl}pendency/commit`,  { params: params })
  }

  approveCommit(id) {
    const commit = { commitCod: id.commitCod };
    this.http.post(`${environment.hubUrl}pendency/approve-commit`, commit);
  }

  declineCommit(id) {
    const commit = { commitCod: id.commitCod };
    this.http.post(`${environment.hubUrl}pendency/decline-commit`, commit);
  }
}
