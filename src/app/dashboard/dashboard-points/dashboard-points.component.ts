import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-points',
  templateUrl: './dashboard-points.component.html',
  styleUrls: ['./dashboard-points.component.css']
})
export class DashboardPointsComponent implements OnInit {

  @Input() totalScore: number;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
