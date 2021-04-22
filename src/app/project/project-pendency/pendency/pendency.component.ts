import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pendency',
  templateUrl: './pendency.component.html',
  styleUrls: ['./pendency.component.css']
})
export class PendencyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PendencyComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
