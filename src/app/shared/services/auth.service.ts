import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logedInUser = new BehaviorSubject<User>(null);
  email: string;

  autoSignIn() {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (!user) {
      return;
    }

    const relogedUser = new User(
      user.email,
      user.password,
      user.token,
      user.tokenExpirationDate
    );

    this.logedInUser.next(relogedUser);
  }

  logOut() {
    this.logedInUser.next(null);
    localStorage.removeItem('userData');
  }

  signUp(userEmail: string, userPass: string) {
    return this.http.post<Response>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        environment.authKey,
      {
        email: userEmail,
        password: userPass,
        returnSecureToken: true,
      }
    );
  }

  signIn(userEmail: string, userPass: string) {
    return this.http
      .post<Response>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          environment.authKey,
        {
          email: userEmail,
          password: userPass,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          const u = new User(
            userEmail,
            userPass,
            resData.idToken,
            new Date(new Date().getTime() + +resData.expiresIn * 1000)
          );
          this.logedInUser.next(u);
          localStorage.setItem('userData', JSON.stringify(u));
        })
      );
  }
}
