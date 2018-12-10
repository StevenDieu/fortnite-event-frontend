import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('/api/auth', {username: username, password: password})
      .pipe(
        map(result => {
          AuthService.saveJwtStorage(result.token);
          return true;
        })
      );
  }

  public static saveJwtStorage(jwt) {
    localStorage.setItem('access_token', jwt);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['accueil']);
  }

  public static get isConnect(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
