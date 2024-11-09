import {Injectable, inject, signal} from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import {Observable, tap} from 'rxjs';
import { LocalStorageKeys } from "../../../config/storage-keys";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {  //load user state from local storage
    this.isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));
    this.userId = signal<number | null>(null);
    this.userEmail = signal<string | null>(null);
  }

  isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));
  userId = signal<number | null>(null);
  userEmail = signal<string | null>(null);

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((response) => {
        localStorage.setItem(LocalStorageKeys.TOKEN, response.id);
        localStorage.setItem(LocalStorageKeys.USER_ID, response.userId.toString());
        localStorage.setItem(LocalStorageKeys.USER_EMAIL, credentials.email);
        this.isAuthenticated.set(true);
        this.userId.set(response.userId);
        this.userEmail.set(credentials.email);
      }
    ));
  }


  logout() {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.USER_ID);
    localStorage.removeItem(LocalStorageKeys.USER_EMAIL);
    this.isAuthenticated.set(false);
    this.userId.set(null);
    this.userEmail.set(null);
  }
}
