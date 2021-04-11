import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';
import {RegisterService} from '../../service/register-service/register.service';
import {RegisterUser} from '../../model/register-user';
import {MessageService} from 'primeng/api';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {passwordConfirmValidator} from '../../validator/password-confirm-validator';
import {uniqueFieldValueValidator} from '../../validator/unique-field-value-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private registerService: RegisterService,
              private authService: AuthService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.getIsLogin()){
      this.router.navigate(['wall']);
    }

    this.registerForm = new FormGroup({
      username: new FormControl('', {
        asyncValidators: [uniqueFieldValueValidator('username', this.registerService)],
        validators: [Validators.required, Validators.pattern('[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?')],
        updateOn: 'blur'
      }),
      password: new FormGroup({
        password: new FormControl('', Validators.minLength(4)),
        retypePassword: new FormControl('', Validators.minLength(4))
      }, { validators: passwordConfirmValidator }),
      displayName: new FormControl('', {
        asyncValidators: [uniqueFieldValueValidator('displayName', this.registerService)],
        validators: [Validators.required, Validators.pattern('[a-zA-Z0-9]([a-zA-Z0-9]+[ ]?)*[a-zA-Z0-9]')],
        updateOn: 'blur'
      }),
      bio: new FormControl('', Validators.required)
    });
  }

  register(): void {
    const newUser: RegisterUser = new RegisterUser(this.registerForm.value);
    this.registerService.registerUser(newUser).subscribe(
      () => {
        this.messageService.add({severity: 'success', summary: 'Create User Successfully', detail: 'Create User Successfully'});
        this.router.navigate(['login']);
      }
    );
  }
  get retypePassword(): AbstractControl{
    return this.password.get('retypePassword');
  }

  get firstPassword(): AbstractControl{
    return this.password.get('password');
  }

  get username(): AbstractControl{
    return this.registerForm.get('username');
  }

  get password(): AbstractControl{
    return this.registerForm.get('password') as FormGroup;
  }

  get displayName(): AbstractControl{
    return this.registerForm.get('displayName');
  }

}
