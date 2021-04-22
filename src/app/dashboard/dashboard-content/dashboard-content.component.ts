import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  // Grafico de pizza
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Pontos por comentário'], ['Pontos por teste'], 'Pontos por boas práticas'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor: 
  any[] = [
    { 
      backgroundColor:["#3f51b5", "#9CA9F0", "#536AED", "#474D6E", "#4153BA"] 
    }];

  // Grafico de barras
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Colab 1', 'Colab 2', 'Colab 3', 'Colab 4', 'Colab 5', 'Colab 6', 'Colab 7'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 86, 27, 97], label: 'Pontos' }
  ];
  public barChartColor: 
  any[] = [
    { 
      backgroundColor:["#3f51b5", "#3f51b5", "#3f51b5", "#3f51b5", "#3f51b5", "#3f51b5", "#3f51b5"] 
    }];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

}
