import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ShortInfoComponent } from './components/short-info/short-info.component';
import { MaterialModule } from 'src/app/core/shared/material/material.module';

@NgModule({
  declarations: [ListComponent, ShortInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
