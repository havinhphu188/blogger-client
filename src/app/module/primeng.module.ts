import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    ProgressSpinnerModule,
    FileUploadModule
  ]
})
export class PrimengModule { }
