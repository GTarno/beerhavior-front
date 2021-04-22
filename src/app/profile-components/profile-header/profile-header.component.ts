import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  panelOpenState = false;
  @Input() admin: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.admin)
  }

  goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }
}
