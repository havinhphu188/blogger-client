import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {RegisterService} from '../service/register-service/register.service';
import {map} from 'rxjs/operators';

export function uniqueFieldValueValidator(fieldName: string, registerService: RegisterService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return registerService.checkIfFieldValueAvailable(fieldName, control.value)
      .pipe(map(isUnique => (isUnique ? null : { unique: true })));
  };
}
