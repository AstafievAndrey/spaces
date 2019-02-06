import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-info',
  templateUrl: './filter-info.component.html',
  styleUrls: ['./filter-info.component.scss']
})
export class FilterInfoComponent implements OnInit {

  filter = {city: 'kazan'};

  constructor() { }

  ngOnInit() {
  }

}
