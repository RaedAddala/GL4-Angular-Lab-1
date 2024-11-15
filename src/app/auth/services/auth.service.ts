import {Injectable, inject, signal} from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import {Observable, tap} from 'rxjs';
import { LocalStorageKeys } from "../../../config/storage-keys";
import {User} from "../dto/user.dto";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {  //load user state from local storage
    this.loadUserState();
  }

   isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));
   private user = signal<User | null>(null);

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((response) => {
        localStorage.setItem(LocalStorageKeys.TOKEN, response.id);
        localStorage.setItem(LocalStorageKeys.USER_ID, response.userId.toString());
        localStorage.setItem(LocalStorageKeys.USER_EMAIL, credentials.email);
        this.isAuthenticated.set(true);
        this.user.set(new User(response.userId.toString(), credentials.email));
      }
    ));
  }
  private loadUserState(): void {
    const id = localStorage.getItem('userId');
    const email = localStorage.getItem('userEmail');
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';

    if (id && email && authStatus) {
      this.user.set(new User(id, email));
      this.isAuthenticated.set(true);
    } else {
      this.user.set(null);
      this.isAuthenticated.set(false);
    }
  }



  logout() {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.USER_ID);
    localStorage.removeItem(LocalStorageKeys.USER_EMAIL);
    this.isAuthenticated.set(false);
    this.user.set(null);
  }
}
