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

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    AddArticleDialogComponent,
    FieldErrorMsgComponent,
    SubmitIfValidDirective,
    EditArticleDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimengModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GeneralInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
