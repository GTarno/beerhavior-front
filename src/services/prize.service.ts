import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrizeService {
  constructor(private http: HttpClient) {}

  createPrize(newUser) {
    const payload = {
      userAdmin: newUser.user,
      nameAdmin: newUser.name,
      emailAdmin: newUser.email,
      passwordAdmin: newUser.password,
    };
    this.http.post(`${environment.hubUrl}prize`, payload);
  }

  listPrize() {
    this.http.get(`${environment.hubUrl}prize`).subscribe((data) => {
      console.log(data);
    });
  }

  updatePrize(data, authorization) {
    const header = new HttpHeaders({ Authorization: authorization });
    const payload = {
      idPrize: data.idPrize,
      namePrize: data.namePrize,
      costPrize: data.costPrize,
      availabilityPrize: data.availabilityPrize,
      stockPrize: data.stockPrize,
    };
    this.http.put(`${environment.hubUrl}prize`, payload);
  }

  deletePrize(id) {
    this.http.delete(`${environment.hubUrl}prize/${id}`);
  }
}
