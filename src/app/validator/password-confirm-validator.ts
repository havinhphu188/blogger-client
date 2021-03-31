import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const passwordConfirmValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const retypePassword = control.get('retypePassword');
  return password && retypePassword && password.value === retypePassword.value ? null : { passwordConfirm: true };
};
