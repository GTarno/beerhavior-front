import { MatDialog } from '@angular/material/dialog';
import { AddColaboratorComponent } from './add-colaborator/add-colaborator.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css']
})
export class ProjectHeaderComponent implements OnInit {

  panelOpenState = false;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addColaborador(): void {
      const dialogRef = this.dialog.open(AddColaboratorComponent, {
        width: '550px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }

}
