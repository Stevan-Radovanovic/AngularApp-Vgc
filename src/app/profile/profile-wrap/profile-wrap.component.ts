import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('input', { static: false }) input: ElementRef;

  changeUser = false;
  changePic = false;

  ngOnInit(): void {
    this.prof.getProfileInfo().subscribe((response) => {
      this.profiles = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.profiles.push(response[key]);
        }
      }

      const email = this.auth.email;
      for (const profile of this.profiles) {
        if (profile.email === email) {
          this.currentProfile = profile;
          return;
        }
      }
      this.currentProfile = new Profile(
        email,
        'https://bulma.io/images/placeholders/128x128.png',
        ''
      );
      this.prof.createProfileInfo(this.currentProfile);
    });
  }

  onChangeUserName() {
    console.log(this.profiles);
    this.changeUser = true;
  }

  onChangeProfilePic() {
    this.changePic = true;
  }

  onCancelChanges() {
    console.log(this.input);
    this.changePic = false;
    this.changeUser = false;
  }

  onSubmitChanges() {
    if (this.changePic) {
      this.currentProfile.imageUrl = this.input.nativeElement.value;
    } else {
      this.currentProfile.userName = this.input.nativeElement.value;
    }
    this.changePic = false;
    this.changeUser = false;
    console.log(this.profiles);
    this.prof.changeProfileInfo(this.profiles);
  }
}
