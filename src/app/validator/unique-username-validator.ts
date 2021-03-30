import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {RegisterService} from '../service/register-service/register.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniqueUsernameValidator implements AsyncValidator {

  constructor(private registerService: RegisterService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.registerService.checkIfUsernameAvailable(control.value)
      .pipe(  map(isUnique => (isUnique ? null : { uniqueUsername: true } )));
  }
}
