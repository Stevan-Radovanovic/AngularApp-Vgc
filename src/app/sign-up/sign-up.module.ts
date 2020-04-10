import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';

const routes: Routes = [
  { path: '', component: SignUpFormComponent },
  {
    path: 'success',
    component: SignUpSuccessComponent,
  },
];

@NgModule({
  declarations: [SignUpFormComponent, SignUpSuccessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
})
export class SignUpModule {}
