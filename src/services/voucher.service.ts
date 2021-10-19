import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  constructor(private http: HttpClient) {}

  createVoucher(data) {
    const today = new Date();
    const payload = {
      dateVoucher: today,
      availableVoucher: 1,
      costVoucher: data.costVoucher,
      prizeQuantityVoucher: data.prizeQuantity,
      prize: data.prize,
    };
    return this.http.post(`${environment.hubUrl}voucher`, payload);
  }

  listVoucher() {
    this.http.get(`${environment.hubUrl}voucher`).subscribe((data) => {
      console.log(data);
    });
  }

  getVoucherByUser(userId) { 
    const payload = {
    collaborator: userId
  };
  return this.http.post(`${environment.hubUrl}voucher/get-by-user`, payload);
}

  redeemVoucher(data, authorization) {
    const header = new HttpHeaders({ Authorization: authorization });
    const payload = {
      voucher: data.voucher,
    };
    return this.http.post(
      `${environment.hubUrl}voucher/use-voucher`,
      { params: payload },
      { headers: header }
    );
  }
}
