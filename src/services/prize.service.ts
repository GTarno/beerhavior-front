import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrizeService {
  constructor(private http: HttpClient) {}

  createPrize(prize) {
    const payload = {
      namePrize: prize.namePrize,
      costPrize: prize.costPrize,
      availabilityPrize: prize.availabilityPrize,
      stockPrize: prize.stockPrize,
    };
    this.http.post(`${environment.hubUrl}prize`, payload);
  }

  listPrize():Observable<any> {
    return this.http.get(`${environment.hubUrl}prize`);
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
