import { PrizeModel } from './../../../models/prize.model';
import { Component, OnInit } from '@angular/core';
import { PrizeService } from 'src/services/prize.service';

@Component({
  selector: 'app-redeem-prize-form',
  templateUrl: './redeem-prize-form.component.html',
  styleUrls: ['./redeem-prize-form.component.css'],
})
export class RedeemPrizeFormComponent implements OnInit {
  public redeemed: boolean = false;
  public prizes: PrizeModel[];
  constructor(private prizeService: PrizeService) {}

  ngOnInit(): void {
    this.getPrizes();
  }

  redeem() {
    this.redeemed = true;
  }

  getPrizes() {
    this.prizeService.listPrize().subscribe((data: PrizeModel[]) => {
      this.prizes = data;
    });
  }
}
