import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterResponse } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  public isLogged(): boolean {
    const isLogged = !!localStorage.getItem('userInfo');

    return isLogged;
  }

  public getUserAccessToken(): string {
    const userInfoString = localStorage.getItem('userInfo') || '';
    const userInfo = JSON.parse(userInfoString);
    const userAccessToken = userInfo.accessToken;

    return userAccessToken;
  }

  public register(email: string, password: string): Observable<RegisterResponse> {
    const url = `${environment.apiUrl}/users/register`;

    const recipe = this.httpClient.post<RegisterResponse>(url, {email, password});

    return recipe;
  }

  public logout(): void {
    localStorage.removeItem('userInfo');

    this.router.navigateByUrl('login');
  }

  public storeUserInfo(userInfo: RegisterResponse): void {
    const data = JSON.stringify(userInfo);

    localStorage.setItem('userInfo', data);
  }
}
