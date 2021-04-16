import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-table-itens',
  templateUrl: './prize-table-itens.component.html',
  styleUrls: ['./prize-table-itens.component.css']
})
export class PrizeTableItensComponent implements OnInit {

  @Input() admin: boolean;
  products: any[]=[
    {name: 'blabla', availability: 'blabla', stock: 'blabla', price: 'blabla'},
    {name: 'lauren', availability: 'lauren', stock: 'lauren', price: 'lauren'}
  ]
    prizeColumns: string[]
  constructor() { }

  ngOnInit(): void {
    if (this.admin == true) {
      this.prizeColumns =["name", "availability", "stock", "price", "edit","delete"];
    }
    else {
      this.prizeColumns =["name", "availability", "stock", "price"];
    }
  }

}
