import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-prize-form',
  templateUrl: './create-prize-form.component.html',
  styleUrls: ['./create-prize-form.component.css']
})
export class CreatePrizeFormComponent implements OnInit {

  public checked: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
