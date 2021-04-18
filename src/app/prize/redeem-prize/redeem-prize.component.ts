import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-redeem-prize',
  templateUrl: './redeem-prize.component.html',
  styleUrls: ['./redeem-prize.component.css']
})
export class RedeemPrizeComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<RedeemPrizeComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
