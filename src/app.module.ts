
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //to use bootstrap packages..
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { HttpModule} from '@angular/http'
import { HttpClientModule }    from '@angular/common/http';
// import { RouterModule} from '@angular/router';


import { AppRoutingModule }     from './app-routing.module'; // ext route config file 

import { AppComponent }         from './app.component';
// import {DataTableModule } from 'angular-4-data-table-bootstrap-4';
// import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider/provider.component';
import { HomeComponent } from './home/home.component';
import { DemoGrid1Component } from './demo-grid1/demo-grid1.component'; //ext component
import { HomeService } from '../service/home.service';
import { AddorEditProviderComponent } from './provider/addor-edit-provider/addor-edit-provider.component';





@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    HomeComponent,
    DemoGrid1Component,
    AddorEditProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    // DataTableModule,
    // CommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
    
  ],
  providers: [HomeService],

  bootstrap: [AppComponent]
})
export class AppModule { }
