import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.scss']
})
export class ShortInfoComponent implements OnInit {

  info = {
    title: 'Title',
    subTitle: 'subTitle',
    desc: 'short Description'
  };

  constructor() { }

  ngOnInit() {
  }

}
