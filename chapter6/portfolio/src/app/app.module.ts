import { CurrencyPipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';
import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
import { StocksInterceptor } from './services/interceptor.service';
import { LocalStorageService } from './services/local-storage.service';
import { StocksComponent } from './stocks/stocks.component';
import { TickerComponent } from './ticker/ticker.component';



@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    TickerComponent,
    StocksComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    LocalStorageService,
    CurrencyPipe,
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StocksInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
