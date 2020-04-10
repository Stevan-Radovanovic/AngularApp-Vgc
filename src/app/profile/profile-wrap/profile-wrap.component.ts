import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Profile } from 'src/app/shared/models/profile.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile-wrap',
  templateUrl: './profile-wrap.component.html',
  styleUrls: ['./profile-wrap.component.css'],
})
export class ProfileWrapComponent implements OnInit {
  constructor(private prof: ProfileService, private auth: AuthService) {}

  currentProfile: Profile = new Profile('', '', '');
  profiles: Profile[] = [];

  ngOnInit(): void {
    this.prof.getProfileInfo().subscribe((response) => {
      this.profiles = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.profiles.push(response[key]);
        }
      }

      const email = this.auth.email;
      console.log('1');
      for (const profile of this.profiles) {
        if (profile.email === email) {
          console.log('2');
          this.currentProfile = profile;
          return;
        }
      }
      console.log('3');
      this.currentProfile = new Profile(
        email,
        'https://bulma.io/images/placeholders/128x128.png',
        ''
      );
      this.prof.createProfileInfo(this.currentProfile);
    });
  }
}
