import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { TestComponent } from './test/test.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import {OwlModule} from 'ngx-owl-carousel';
import{ BreakingNewsService } from '../app/newscontent/breaking-news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    NewscontentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatVideoModule

  ],
  providers: [BreakingNewsService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
