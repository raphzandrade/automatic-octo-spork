import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      const userAccessToken = this.authService.getUserAccessToken();

      const updatedRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${userAccessToken}`
        }
      });

      return next.handle(updatedRequest);
  }
}
