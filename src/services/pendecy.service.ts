import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PendencyService {
  constructor(private http: HttpClient) {}

  getUserPendency() {
    return this.http.get(`${environment.hubUrl}pendency/user`).subscribe((data) => {
      console.log(data);
    });
  }

  approveUser(id) {
    const user = { collaborator: id.collaboratorId };
    this.http.post(`${environment.hubUrl}pendency/approve-user`, user);
  }

  declineUser(id) {
    const user = { collaborator: id.collaboratorId };
    this.http.post(`${environment.hubUrl}pendency/decline-user`, user);
  }

  getCommitPendency() {
    return this.http.get(`${environment.hubUrl}pendency/commit`).subscribe((data) => {
      console.log(data);
    });
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
