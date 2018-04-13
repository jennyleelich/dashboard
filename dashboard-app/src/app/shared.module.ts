import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AccordionModule
  ],
  exports: [
    SpringDetailsComponent
  ]

})
export class SharedModule { }
