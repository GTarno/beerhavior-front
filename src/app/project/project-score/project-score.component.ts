import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-score',
  templateUrl: './project-score.component.html',
  styleUrls: ['./project-score.component.css']
})
export class ProjectScoreComponent implements OnInit {

  @Input() score
  
  constructor() { }

  ngOnInit(): void {
  }

}
