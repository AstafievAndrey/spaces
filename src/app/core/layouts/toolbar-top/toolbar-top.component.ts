import { Component, OnInit } from '@angular/core';
import { params } from '../../config/params';

@Component({
  selector: 'app-toolbar-top',
  templateUrl: './toolbar-top.component.html',
  styleUrls: ['./toolbar-top.component.scss']
})
export class ToolbarTopComponent implements OnInit {

  name: string = params.name;

  constructor() { }

  ngOnInit() {
  }

}
