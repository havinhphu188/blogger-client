import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANT} from '../../constant';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginAnnouncedSource = new Subject<boolean>();
  loginAnnounced$ = this.loginAnnouncedSource.asObservable();
  constructor(private http: HttpClient) {
  }

  // Service message commands
  announceLogin(isLogin: boolean): void{
    this.loginAnnouncedSource.next(isLogin);
  }

  login(username: string, password: string): Observable<any> {
    return new Observable(subscriber => {
        this.http.post<IToken>(CONSTANT.API.AUTHENTICATE, {
          username,
          password
        }).subscribe((resp) => {
          localStorage.setItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN, 'true');
          localStorage.setItem(CONSTANT.LOCAL_STORAGE.JWT_TOKEN, resp.token);
          this.announceLogin(true);
          subscriber.next();
        });
      }
    );
  }

  logout(): void {
    localStorage.setItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN, 'false');
    localStorage.removeItem(CONSTANT.LOCAL_STORAGE.JWT_TOKEN);
    this.announceLogin(false);
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
