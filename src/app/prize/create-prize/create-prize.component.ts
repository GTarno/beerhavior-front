import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-prize',
  templateUrl: './create-prize.component.html',
  styleUrls: ['./create-prize.component.css']
})
export class CreatePrizeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreatePrizeComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
