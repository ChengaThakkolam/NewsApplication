import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingsComponent } from './top-headings/top-headings.component';
import { EverythingComponent } from './everything/everything.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsApiService } from './news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingsComponent,
    EverythingComponent,
    BusinessComponent,
    SportsComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
