import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem-prize-form',
  templateUrl: './redeem-prize-form.component.html',
  styleUrls: ['./redeem-prize-form.component.css']
})
export class RedeemPrizeFormComponent implements OnInit {

  public redeemed: boolean = false;
  public  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  redeem(){
    this.redeemed = true;
  }
}
