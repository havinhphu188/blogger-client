export class RegisterUser {
  username: string;
  password: string;
  displayName: string;
  bio: string;

  constructor(registerForm: any) {
      this.username = registerForm.username;
      this.password = registerForm.password.password;
      this.displayName = registerForm.displayName;
      this.bio = registerForm.bio;
  }
}
