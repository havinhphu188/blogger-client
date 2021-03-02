import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
