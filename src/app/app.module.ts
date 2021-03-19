import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { WallComponent } from './component/wall/wall.component';
import {FormsModule} from '@angular/forms';
import {GeneralInterceptor} from './interceptor/general-interceptor';
import {MessageService} from 'primeng/api';
import {PrimengModule} from './module/primeng.module';
import {AddArticleDialogComponent} from './sub-component/add-article-dialog/add-article-dialog.component';
import { FieldErrorMsgComponent } from './sub-component/field-error-msg/field-error-msg.component';
import { SubmitIfValidDirective } from './directive/submit-if-valid.directive';
import { EditArticleDialogComponent } from './sub-component/edit-article-dialog/edit-article-dialog.component';
import { AppRoutingModule } from './module/app-routing.module';
import { LoginComponent } from './component/login/login.component';
import {JwtInterceptor} from './interceptor/jwt-interceptor';
import { HeaderComponent } from './sub-component/header/header.component';
import { AccountComponent } from './component/account/account.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GlobalFeedComponent } from './component/global-feed/global-feed.component';
import { LoaderComponent } from './sub-component/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    AddArticleDialogComponent,
    FieldErrorMsgComponent,
    SubmitIfValidDirective,
    EditArticleDialogComponent,
    LoginComponent,
    HeaderComponent,
    AccountComponent,
    DashboardComponent,
    GlobalFeedComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GeneralInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
