import { UserPendencyModel, CommitPendencyModel } from './../../../../../models/pendency.model';
import { PendencyService } from './../../../../../services/pendecy.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pendency-aproval',
  templateUrl: './pendency-aproval.component.html',
  styleUrls: ['./pendency-aproval.component.css']
})
export class PendencyAprovalComponent implements OnInit {

  @Input() projectId
  public userPendency: UserPendencyModel;
  public commitPendency: CommitPendencyModel;

  constructor(
    private pendencyService: PendencyService
  ) { }

  ngOnInit(): void {
    this.getCommitPendency(1);
    this.getUserPendency(1);
  }

  getUserPendency(projectId){
    this.pendencyService.getUserPendency(projectId).subscribe((result:UserPendencyModel) => {
      this.userPendency = result
      console.log("pendencia",this.userPendency);
    })
  }

  getCommitPendency(projectId){
    this.pendencyService.getCommitPendency(projectId).subscribe((result:CommitPendencyModel) => {
      this.commitPendency = result
      console.log("pendencia commit",this.commitPendency);
    })
  }

}
