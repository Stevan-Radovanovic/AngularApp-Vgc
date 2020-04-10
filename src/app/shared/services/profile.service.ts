import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

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

  getProfileInfo() {
    return this.http.get<Profile[]>(
      'https://vgc-angular.firebaseio.com/profiles.json'
    );
  }
}
