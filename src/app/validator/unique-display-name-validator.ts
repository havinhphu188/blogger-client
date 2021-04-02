import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RegisterService} from '../service/register-service/register.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueDisplayNameValidator implements AsyncValidator {
  constructor(private registerService: RegisterService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.registerService.checkIfDisplayNameAvailable(control.value)
      .pipe(  map(isUnique => (isUnique ? null : { unique: true } )));
  }
}
