import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}

  signInForm: FormGroup;
  errorMessage: string = null;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.auth
      .signIn(
        this.signInForm.controls.email.value,
        this.signInForm.controls.password.value
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.route.navigate(['../home']);
        },
        (errorRes) => {
          console.log(errorRes);
          switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              this.errorMessage = 'Email not found!';
              break;
            case 'INVALID_PASSWORD':
              this.errorMessage = 'Incorrect password';
              break;
            default:
              this.errorMessage = 'An error occured';
          }
        }
      );
  }
}
