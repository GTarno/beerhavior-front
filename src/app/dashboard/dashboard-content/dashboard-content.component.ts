import { DashboardService } from './../../../services/dashboard.service';
import { Router } from '@angular/router';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import { ProjectModel } from 'src/models/project.model';
import { DashboardModel } from 'src/models/dashboard.model';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
})
export class DashboardContentComponent implements OnInit {
  public idProject: any;
  public projectList: ProjectModel[] = [];
  public totalScore: number;
  public codeScore: number;
  public praticesScore: number;
  public testScore: number;

  // Grafico de pizza
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor: any[] = [
    {
      backgroundColor: ['#3f51b5', '#9CA9F0', '#536AED'],
    },
  ];

  // Grafico de barras
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    'Colab 1',
    'Colab 2',
    'Colab 3',
    'Colab 4',
    'Colab 5',
    'Colab 6',
    'Colab 7',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 86, 27, 97], label: 'Pontos' },
  ];
  public barChartColor: any[] = [
    {
      backgroundColor: [
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
        '#3f51b5',
      ],
    },
  ];

  constructor(
    private projectService: ProjectService,
    private dashboardService: DashboardService,
    private router: Router
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.listProjects();
  }

  getScore(projectId) {
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.getScoreByCategory(projectId);
    this.getTotalScore(projectId);
  }

  getScoreByCategory(projectId) {
    this.dashboardService.getProjectCodeScore(projectId).subscribe((result) => {
      this.codeScore = result.scoreForCode;
      this.pieChartData.push(this.codeScore);
      this.pieChartLabels.push('Pontos por código');
      console.log('code', this.codeScore);
    });
    this.dashboardService
      .getProjectPraticesScore(projectId)
      .subscribe((result) => {
        this.praticesScore = result.scoreForPratices;
        this.pieChartData.push(this.praticesScore);
        this.pieChartLabels.push('Pontos por boas práticas');
        console.log('praticies', this.praticesScore);
      });
    this.dashboardService.getProjectTestScore(projectId).subscribe((result) => {
      this.testScore = result.scoreForTest;
      this.pieChartData.push(this.testScore);
      this.pieChartLabels.push('Pontos por teste');
      console.log('test', this.testScore);
    });
  }

  getTotalScore(projectId) {
    this.dashboardService.getProjectTotalScore(projectId).subscribe(
      (data) => {
        this.totalScore = data.totalScore;
      },
      (err) => {
        this.totalScore = 0;
      }
    );
  }

  listProjects() {
    this.projectService.listProject().subscribe(
      (result: ProjectModel[]) => {
        this.projectList = result;
      },
      (err) => {
        this.router.navigate(['/erro']);
      }
    );
  }
}
