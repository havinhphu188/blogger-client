import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Directive({
  selector: '[appSubmitIfValid]'
})
export class SubmitIfValidDirective {
  @Output('appSubmitIfValid') valid = new EventEmitter<void>();

  constructor(private formRef: NgForm) { }

  @HostListener('click')
  handleClick(): void {
    this.markFieldsAsDirty();
    this.emitIfValid();
  }

  private markFieldsAsDirty(): void {
    Object.keys(this.formRef.controls)
      .forEach(fieldName =>
        this.formRef.controls[fieldName].markAsDirty()
      );
  }

  private emitIfValid(): void {
    if (this.formRef.valid) {
      this.valid.emit();
    }
  }
}
