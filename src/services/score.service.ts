import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  getScore() {
    this.http.get(`${environment.hubUrl}score-value`).subscribe((data) => {
      console.log(data);
    });
  }
}
