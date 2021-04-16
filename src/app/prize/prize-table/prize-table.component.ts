import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrizeTableDialog } from './prize-table-dialog.model';

@Component({
  selector: 'app-prize-table',
  templateUrl: './prize-table.component.html',
  styleUrls: ['./prize-table.component.css']
})
export class PrizeTableComponent implements OnInit {

  public isAdmin: boolean
  constructor(
    public dialogRef: MatDialogRef<PrizeTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PrizeTableDialog
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.data.admin
  }

  close(): void {
    this.dialogRef.close();
  }

}
