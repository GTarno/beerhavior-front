import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.css']
})
export class ProfileTypeComponent implements OnInit {

  @Input() type: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectType(type: string): void {
    sessionStorage.setItem('profileType', this.type);
  }

}
