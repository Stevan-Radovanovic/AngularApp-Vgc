import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { RouterOutlet } from '@angular/router';
import { slider } from './app-animations';

@Component({
  selector: 'app-root',
  animations: [slider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.autoSignIn();
    if (localStorage.getItem('userData') != null) {
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
