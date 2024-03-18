import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable ({providedIn: 'root'})
export class UserService {
    baseUrl: string

    constructor(private http: HttpClient) {
        this.baseUrl = 'http://localhost:18080/api';
    }

    public getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + '/users/');
    }

    public getUser(id: number): Observable<User> {
        return this.http.get<User>(this.baseUrl + '/user/' + id.toString());
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + '/user/add/', user);
    }
    loginUser(user: User): Observable<User> {
      return this.http.post<User>(this.baseUrl + '/user/login/', user);
  }
    updateUser(user: User): Observable<any> {
        console.log(user.id)
        console.log(user.request)
        return this.http.put(this.baseUrl + '/user/update/' + user.id.toString(), user);
    }

    requestUser(user: User): Observable<any> {
        return this.http.put(this.baseUrl + '/user/request/' + user.id.toString(), user);
    }

    deleteUser(id: number): Observable<User> {

        return this.http.delete<User>(this.baseUrl + '/user/delete/' + id.toString());
    }

}
