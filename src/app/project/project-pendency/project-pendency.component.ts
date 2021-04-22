import { PendencyComponent } from './pendency/pendency.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-pendency',
  templateUrl: './project-pendency.component.html',
  styleUrls: ['./project-pendency.component.css'],
})
export class ProjectPendencyComponent implements OnInit {
  hidden = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  pendency(): void {
    const dialogRef = this.dialog.open(PendencyComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
    this.hidden = !this.hidden;
  }
}
