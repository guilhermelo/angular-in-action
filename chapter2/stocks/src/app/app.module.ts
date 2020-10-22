import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SummaryComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
