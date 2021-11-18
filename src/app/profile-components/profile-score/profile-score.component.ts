import { RedeemPrizeComponent } from './../../prize/redeem-prize/redeem-prize.component';
import { MatDialog } from '@angular/material/dialog';
import { PrizeTableComponent } from 'src/app/prize/prize-table/prize-table.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-score',
  templateUrl: './profile-score.component.html',
  styleUrls: ['./profile-score.component.css']
})
export class ProfileScoreComponent implements OnInit {

  @Input() score: number
  public isAdmin: boolean = false;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openPrizeTable(): void {
    const dialogRef = this.dialog.open(PrizeTableComponent, {
      width: '750px',
      data: {admin: this.isAdmin}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  redeemPrize(): void {
    const dialogRef = this.dialog.open(RedeemPrizeComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
