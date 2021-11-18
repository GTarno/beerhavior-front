import { DashboardService } from 'src/services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-points',
  templateUrl: './dashboard-points.component.html',
  styleUrls: ['./dashboard-points.component.css']
})
export class DashboardPointsComponent implements OnInit {

  public totalScore: number;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getTotalPoints();
  }

  getTotalPoints(){
    this.dashboardService.getProjectTotalScore(1).subscribe(data => {
      this.totalScore = data.totalScore
    })
  }

}
