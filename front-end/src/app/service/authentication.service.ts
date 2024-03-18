import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:18080/api'; 

  constructor(private http: HttpClient) { }

  login(id: number, username: string, password: string, userType: string, request: string) {
    const user = new User(id,username, password, userType, request)
    return this.http.post(this.apiUrl + '/login', user);
  }

  
}
