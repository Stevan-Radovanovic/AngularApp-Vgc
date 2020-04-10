import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileWrapComponent } from './profile-wrap/profile-wrap.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: ProfileWrapComponent }];

@NgModule({
  declarations: [ProfileWrapComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProfileModule {}
