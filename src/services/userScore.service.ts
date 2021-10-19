import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserScoreService {
  constructor(private http: HttpClient) {}

  createScore(data, authorization) {
    const today = new Date();
    const header = new HttpHeaders({ Authorization: authorization });
    const payload = {
      scoreForCode: data.scoreForCode,
      scoreForTest: data.scoreForTest,
      scoreForPratices: data.scoreForPratices,
      totalScore: data.scoreForCode + data.scoreForTest + data.scoreForPratices,
      dateScore: today,
      userApproved: data.userApproved,
      commitCod: data.commitCod,
      given: 'N',
      project: data.project,
    };
    return this.http.post(
      `${environment.hubUrl}score`,
      { params: payload },
      { headers: header }
    );
  }

  listScore() {
    this.http.get(`${environment.hubUrl}score`).subscribe((data) => {
      console.log(data);
    });
  }
}
