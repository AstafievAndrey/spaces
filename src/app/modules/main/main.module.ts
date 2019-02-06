import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ShortInfoComponent } from './components/short-info/short-info.component';
import { MaterialModule } from 'src/app/core/shared/material/material.module';
import { FilterInfoComponent } from './components/filter-info/filter-info.component';

@NgModule({
  declarations: [ListComponent, ShortInfoComponent, FilterInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
