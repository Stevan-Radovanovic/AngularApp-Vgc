import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Profile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private route: Router,
    private prof: ProfileService
  ) {}

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.auth
      .signUp(
        this.signUpForm.controls.email.value,
        this.signUpForm.controls.password.value
      )
      .subscribe((response) => {
        this.route.navigateByUrl('/signup/success');
      });
  }
}
