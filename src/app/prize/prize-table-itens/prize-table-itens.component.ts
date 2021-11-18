import { PrizeModel } from './../../../models/prize.model';
import { PrizeService } from './../../../services/prize.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-table-itens',
  templateUrl: './prize-table-itens.component.html',
  styleUrls: ['./prize-table-itens.component.css'],
})
export class PrizeTableItensComponent implements OnInit {
  @Input() admin: boolean;
  public prizes: PrizeModel[];
  public prizeColumns: string[];
  constructor(private prizeService: PrizeService) {}

  ngOnInit(): void {
    if (this.admin == true) {
      this.prizeColumns = [
        'namePrize',
        'availabilityPrize',
        'stockPrize',
        'costPrize',
        'edit',
        'delete',
      ];
    } else {
      this.prizeColumns = ['namePrize', 'availabilityPrize', 'stockPrize', 'costPrize'];
    }
    this.getPrizes();
  }

  getPrizes() {
    this.prizeService.listPrize().subscribe((data: PrizeModel[]) => {
      console.log(data);
      this.prizes = data;
    });
  }
}
