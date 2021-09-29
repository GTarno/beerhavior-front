import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  handleLoginAdmin(login) {
    const payload = {
      user: login.user,
      password: login.password,
    };
    return this.http.post(`${environment.hubUrl}session/admin`, payload);
  }

  handleLoginCollaborator(login) {
    const payload = {
      user: login.user,
      password: login.password,
    };
    return this.http.post(`${environment.hubUrl}session/collaborator`, payload);
  }
}
