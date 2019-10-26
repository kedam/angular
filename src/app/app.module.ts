import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';

import {MatTabsModule} from '@angular/material/tabs';

import { FormsModule } from '@angular/forms';

import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { IoutComponent } from './iout/iout.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    IoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatRadioModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
