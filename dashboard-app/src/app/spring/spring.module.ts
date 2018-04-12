import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpringComponent } from './spring.component';
import { SpringTabsComponent } from './spring-tabs/spring-tabs.component';
import { SpringDetailsComponent } from './spring-details/spring-details.component';
import { SpringDashboardComponent } from './spring-dashboard/spring-dashboard.component';
import { springRouting } from './spring.routes';
@NgModule({
  imports: [
    CommonModule,
    springRouting
  ],
  declarations: [
    SpringComponent,
    SpringTabsComponent,
    SpringDetailsComponent,
    SpringDashboardComponent
  ],
  providers: [ ]
})
export class SpringModule { }
