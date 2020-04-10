import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('burger') burger: ElementRef;
  toggleActive = false;
  logedIn = false;
  email: string;

  constructor(private auth: AuthService) {}

  onBurgerClick() {
    this.toggleActive = !this.toggleActive;
  }

  ngOnInit(): void {
    this.auth.logedInUser.subscribe((response) => {
      if (response == null) {
        this.logedIn = false;
      } else {
        this.logedIn = true;
        this.email = response.email;
        this.auth.email = response.email;
      }
    });
  }

  onLogout() {
    this.auth.logOut();
  }
}
