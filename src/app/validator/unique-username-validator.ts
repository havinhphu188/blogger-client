import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {RegisterService} from '../service/register-service/register.service';
import {map} from 'rxjs/operators';

export function uniqueUsernameValidator(fieldName: string, registerService: RegisterService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return registerService.checkIfUsernameAvailable(control.value)
      .pipe(map(isUnique => (isUnique ? null : { uniqueUsername: true })));
  };

}
