import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { DashboardComponent } from './dashboard.component';
import { DialogModule,
  DataTableModule,
  AccordionModule,
  DropdownModule,
  ChartModule,
  TabViewModule
} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    AccordionModule,
    ChartModule,
    DropdownModule,
    TabViewModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [ ]
})
export class DashboardModule { }
