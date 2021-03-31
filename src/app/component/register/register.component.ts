import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';
import {RegisterService} from '../../service/register-service/register.service';
import {RegisterUser} from '../../model/register-user';
import {MessageService} from 'primeng/api';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UniqueUsernameValidator} from '../../validator/unique-username-validator';
import {passwordConfirmValidator} from '../../validator/password-confirm-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public newUser: RegisterUser;
  password: FormGroup;
  username: FormControl;

  constructor(private registerService: RegisterService,
              private authService: AuthService,
              private uniqueUsernameValidator: UniqueUsernameValidator,
              private messageService: MessageService,
              private router: Router) {
    this.newUser = new RegisterUser();
  }

  ngOnInit(): void {
    if (this.authService.getIsLogin()){
      this.router.navigate(['wall']);
    }
    this.username = new FormControl('', {
      asyncValidators: [this.uniqueUsernameValidator.validate.bind(this.uniqueUsernameValidator)],
      updateOn: 'blur'
    });

    this.password = new FormGroup({
      password: new FormControl('', Validators.required),
      retypePassword: new FormControl('', Validators.required)
    }, { validators: passwordConfirmValidator });
  }

  register(): void {
    this.registerService.registerUser(this.newUser).subscribe(
      () => {
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

}
