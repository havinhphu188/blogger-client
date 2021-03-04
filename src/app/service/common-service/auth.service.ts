import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANT} from '../../constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return new Observable(subscriber => {
        this.http.post<IToken>(CONSTANT.API.AUTHENTICATE, {
          username,
          password
        }).subscribe((resp) => {
          localStorage.setItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN, 'true');
          localStorage.setItem(CONSTANT.LOCAL_STORAGE.JWT_TOKEN, resp.token);
          subscriber.next();
        });
      }
    );
  }

  logout(): void {
    localStorage.setItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN, 'false');
    localStorage.removeItem(CONSTANT.LOCAL_STORAGE.JWT_TOKEN);
  }

  getIsLogin(): boolean {
    return localStorage.getItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN) === 'true';
  }

  getToken(): string {
    return localStorage.getItem(CONSTANT.LOCAL_STORAGE.JWT_TOKEN);
  }
}

interface IToken {
  token: string;
}
