import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringDetailsComponent } from './spring/spring-details/spring-details.component';
import { DialogModule,
  DataTableModule,
  AccordionModule,
  DropdownModule,
  ChartModule
} from 'primeng/primeng';
@NgModule({
  declarations: [
    SpringDetailsComponent
  ],
  imports: [
    AccordionModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    SpringDetailsComponent
  ]

})
export class SharedModule { }
