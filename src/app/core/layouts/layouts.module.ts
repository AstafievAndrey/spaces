import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ToolbarTopComponent } from './toolbar-top/toolbar-top.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [MainComponent, ToolbarTopComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutsModule { }
