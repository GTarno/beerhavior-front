import { CreatePrizeComponent } from './../../prize/create-prize/create-prize.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrizeTableComponent } from 'src/app/prize/prize-table/prize-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.css']
})
export class ProfileManagerComponent implements OnInit {

  public isAdmin: boolean = true;
  constructor(
    private dialog: MatDialog,
    private router: Router
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
  addPrize(): void {
    const dialogRef = this.dialog.open(CreatePrizeComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  createNewProject(){
    this.router.navigate(['/novo-projeto'])
  }
}
