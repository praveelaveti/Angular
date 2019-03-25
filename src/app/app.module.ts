import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LeftMenuComponent} from './leftMenu/leftMenu.component';
import { HelloComponent } from './hello.component';
import { PlicyService } from './plicy.service';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module'; // ext route config file 


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ,AppRoutingModule,HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )   ],
  declarations: [ AppComponent, HelloComponent ,HeaderComponent,FooterComponent,LeftMenuComponent],
  bootstrap:    [ AppComponent ],
  providers: [PlicyService]
})
export class AppModule { }



