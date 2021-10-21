import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  adminRegistration(newUser) {
    const payload = {
      userAdmin: newUser.user,
      nameAdmin: newUser.name,
      emailAdmin: newUser.email,
      passwordAdmin: newUser.password,
    };
    this.http.post(`${environment.hubUrl}admin`, payload);
  }

  listAdmin() {
    this.http.get(`${environment.hubUrl}admin`).subscribe((data) => {
      console.log(data);
    });
  }

  updateAdmin(data, authorization) {
    const header = new HttpHeaders({ Authorization: authorization });
    const payload = {
      userAdmin: data.user,
      nameAdmin: data.name,
      emailAdmin: data.email,
      passwordAdmin: data.password,
    };
    this.http.put(
      `${environment.hubUrl}admin`,
      { params: payload },
      { headers: header }
    );
  }

  deleteAdmin(authorization) {
    const header = new HttpHeaders({ Authorization: authorization });
    this.http.delete(`${environment.hubUrl}admin`, { headers: header });
  }
}
