import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    if (token) {
      if(!this.authService.isExpired())
      {
        let newRequest:HttpRequest<any>;
        newRequest = request.clone({
          headers: request.headers.set("Authorization","Bearer " + token)
        });
        return next.handle(newRequest);

      }
    }
    this.authService.clearToken();
    return next.handle(request);
  }
}
