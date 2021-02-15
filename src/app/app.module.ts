import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WallComponent } from './wall/wall.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
