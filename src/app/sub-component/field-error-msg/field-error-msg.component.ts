import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-field-error-msg',
  templateUrl: './field-error-msg.component.html',
  styleUrls: ['./field-error-msg.component.css']
})
export class FieldErrorMsgComponent implements OnInit {
  @Input() fieldRef: NgModel;
  errorMsg: string;

  constructor() { }

  ngOnInit(): void {
    this.errorMsg = 'This field can not be left empty';
  }

}
