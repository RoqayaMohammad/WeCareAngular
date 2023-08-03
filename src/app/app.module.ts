import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService,WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

//import schedulerModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaServic


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ScheduleModule, RecurrenceEditorModule


  ],
  providers: [DayService, WeekService,WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
