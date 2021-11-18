import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  constructor(private http: HttpClient) {}

  profile(user):Observable<any> {
    const params = { user: user }
    return this.http.get(`${environment.hubUrl}collaborator/profile`, { params: params })
  }


}
