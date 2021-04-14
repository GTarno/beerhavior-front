import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.css']
})
export class ProfileTypeComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
