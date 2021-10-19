import { Component, OnInit } from '@angular/core';
import { DashboardModel } from 'src/models/dashboard.model';
import { DashboardService } from 'src/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardByProject: DashboardModel[]

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getProject(1).subscribe((result :DashboardModel[])=>{
      console.log(result);
      this.dashboardByProject = result;
    })
  }

}
