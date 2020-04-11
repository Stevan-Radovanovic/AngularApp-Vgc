import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Profile } from '../models/profile.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  createProfileInfo(profile: Profile) {
    console.log(profile);
    return this.http
      .post(
        'https://vgc-angular.firebaseio.com/profiles.json',
        JSON.stringify(profile)
      )
      .subscribe(() => {
        console.log('Profil kreiran');
      });
  }

  changeProfileInfo(profile: Profile[]) {
    return this.http
      .put('https://vgc-angular.firebaseio.com/profiles.json', profile)
      .subscribe(() => {
        console.log('Profil promenjen');
      });
  }

  getProfileInfo() {
    return this.http.get<Profile[]>(
      'https://vgc-angular.firebaseio.com/profiles.json'
    );
  }
}
