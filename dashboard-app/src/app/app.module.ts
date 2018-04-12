import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SpringModule } from './spring/spring.module';
import { SummerModule } from './summer/summer.module';
import { FallModule } from './fall/fall.module';
import { WinterModule } from './winter/winter.module';

import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    SpringModule,
    SummerModule,
    FallModule,
    WinterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
