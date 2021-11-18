import { Component, OnInit } from '@angular/core';
import { CollaboratorModel } from 'src/models/collaborator.model';
import { CollaboratorService } from 'src/services/collaborator.service';

@Component({
  selector: 'app-profile-programmer',
  templateUrl: './profile-programmer.component.html',
  styleUrls: ['./profile-programmer.component.css'],
})
export class ProfileProgrammerComponent implements OnInit {
  public profile: CollaboratorModel;
  constructor(private collaboratorService: CollaboratorService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.collaboratorService.profile('b62193dc').subscribe((data: CollaboratorModel) => {
        this.profile = data;
      });
  }
}
