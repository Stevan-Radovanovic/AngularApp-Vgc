import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newReq = null;

    return this.auth.logedInUser.pipe(
      take(1),
      exhaustMap((logedInUser) => {
        if (logedInUser === null) {
          console.log('nije ok');
          return next.handle(req);
        }

        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', logedInUser.getToken()),
        });
        console.log('ok');
        return next.handle(modifiedReq);
      })
    );
  }
}
