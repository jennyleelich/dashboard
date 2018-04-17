import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallComponent } from './fall.component';
import { AccordionModule, DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  declarations: [
    FallComponent
  ],
  providers: [ ]
})
export class FallModule { }
