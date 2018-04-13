import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpringComponent } from './spring.component';
import { SpringTabsComponent } from './spring-tabs/spring-tabs.component';
import { SpringDashboardComponent } from './spring-dashboard/spring-dashboard.component';
import { springRouting } from './spring.routes';
import { SharedModule } from '../shared.module';
import { DialogModule,
        DataTableModule,
        AccordionModule,
        DropdownModule,
        ChartModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    springRouting,
    DialogModule,
    DataTableModule,
    AccordionModule,
    ChartModule,
    SharedModule
  ],
  declarations: [
    SpringComponent,
    SpringTabsComponent,
    SpringDashboardComponent
  ],
  providers: [ ]
})
export class SpringModule { }
