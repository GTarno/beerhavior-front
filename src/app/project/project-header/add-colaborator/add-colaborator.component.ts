import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-colaborator',
  templateUrl: './add-colaborator.component.html',
  styleUrls: ['./add-colaborator.component.css']
})
export class AddColaboratorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddColaboratorComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
