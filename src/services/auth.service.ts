import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode'; // Use named import

interface LoginResponse {
  success: boolean;
  token?: string;
  user?: { id: number; name: string; email: string; role: string };
  message?: string;
}

interface DecodedToken {
  sub: number;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  // Login method to authenticate user and store token
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map((response) => {
          if (response.success && response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user',JSON.stringify(response.user));
            //const user = JSON.parse(localStorage.getItem('user')!);
          }
          return response;
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(() => new Error(error.error.message || 'Login failed'));
        })
      );
  }

  // Get the stored JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const decoded: DecodedToken = jwtDecode(token); // Use jwtDecode
      const isTokenExpired = decoded.exp * 1000 < Date.now();
      if(isTokenExpired){
        console.log("token expired");
        this.refreshToken().subscribe((res)=>{
          console.log(res);
          if(res.access_token){
            localStorage.setItem('token', res.access_token);
            console.log("token refreshed")
            return true;
          }
        });
      } 
      return true;
    } catch (error) {
      console.error('Token decode error:', error);
      return false;
    }
  }

  refreshToken():Observable<any>{
    const token = this.getToken();
    return this.http.post<any>(`${this.apiUrl}/refreshToken`,{})
  }

  // Get user information from the token
  getUser(): DecodedToken | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    try {
      console.log(jwtDecode(token))
      return jwtDecode(token); // Use jwtDecode
    } catch (error) {
      console.error('Token decode error:', error);
      return null;
    }
  }

  // Logout method to clear token
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      map((response) => {
        localStorage.removeItem('token');
        return response;
      }),
      catchError((error) => {
        console.error('Logout error:', error);
        return throwError(() => new Error('Logout failed'));
      })
    );
  }
}