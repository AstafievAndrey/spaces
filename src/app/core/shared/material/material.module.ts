import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlRu } from './mat-paginator-intl-ru';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    LayoutModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu}
  ]
})
export class MaterialModule { }
