import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/server';

  constructor(private http: HttpClient) {
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register.php`, user);
  }

  login(credentials: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login.php`, credentials).pipe(
      tap(response => sessionStorage.setItem('access_token', response.token))
    );
  }
}
