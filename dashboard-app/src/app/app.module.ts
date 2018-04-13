import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SpringModule } from './spring/spring.module';
import { SummerModule } from './summer/summer.module';
import { FallModule } from './fall/fall.module';
import { WinterModule } from './winter/winter.module';
import { SharedModule } from './shared.module';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { DialogModule,
  DataTableModule,
  AccordionModule,
  DropdownModule,
  ChartModule
} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    DialogModule,
    DataTableModule,
    AccordionModule,
    DropdownModule,
    ChartModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    SpringModule,
    SummerModule,
    FallModule,
    WinterModule,
    routing,
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
