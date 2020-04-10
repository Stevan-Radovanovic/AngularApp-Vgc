import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsDetailComponent } from './home-page/news-detail/news-detail.component';
import { NewsDefaultComponent } from './home-page/news-default/news-default.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SignGuard } from './shared/guards/sign.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: NewsDefaultComponent,
      },
      { path: ':title', component: NewsDetailComponent },
    ],
    data: { animation: 'isLeft' },
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInModule),
    data: { animation: 'isRight' },
    canActivateChild: [SignGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
    data: { animation: 'isMiddle' },
    canActivateChild: [SignGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    data: { animation: 'isRight' },
    canActivateChild: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: '**',
    redirectTo: 'pageNotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
