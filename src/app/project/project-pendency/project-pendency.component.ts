import { PendencyService } from './../../../services/pendecy.service';
import { PendencyComponent } from './pendency/pendency.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-pendency',
  templateUrl: './project-pendency.component.html',
  styleUrls: ['./project-pendency.component.css'],
})
export class ProjectPendencyComponent implements OnInit {
  public hidden = false;
  public totalPendency: any
  @Input() idProject: number

  constructor(
    private dialog: MatDialog,
    private pendencyService: PendencyService
    ) {}

  ngOnInit(): void {
    console.log('pendency id project',this.idProject);
    this.getPendency(this.idProject);
  }

  pendency(): void {
    const dialogRef = this.dialog.open(PendencyComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
    this.hidden = !this.hidden;
  }

  getPendency(idProject){
    this.totalPendency = this.pendencyService.getTotalPendency(idProject)
    console.log('total',this.totalPendency);
  }
}
