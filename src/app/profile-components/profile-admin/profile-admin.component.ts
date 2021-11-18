import { AdminModel } from './../../../models/admin.model';
import { AdminService } from 'src/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css'],
})
export class ProfileAdminComponent implements OnInit {
  public profile: AdminModel;
  public isAdmin: boolean = true;
  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.adminService.profile('70c75c04').subscribe((data: AdminModel) => {
        this.profile = data;
      });
  }
}
