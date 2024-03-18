import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DogModel } from '../model/dog.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable ({providedIn: 'root'})
export class Dogservice {
    baseUrl: string

    constructor(private http: HttpClient) {
        this.baseUrl = 'http://localhost:18080/api';
    }

    public getAllDogs(): Observable<DogModel[]> {
        return this.http.get<DogModel[]>(this.baseUrl + '/dogs/');
    }

    public getDog(id: number): Observable<DogModel> {
        return this.http.get<DogModel>(this.baseUrl + '/dog/' + id.toString());
    }

    addDog(dog: DogModel): Observable<DogModel> {
        return this.http.post<DogModel>(this.baseUrl + '/dog/add/', dog);
    }

    updateDog(dog: DogModel): Observable<any> {
        return this.http.put(this.baseUrl + '/dog/update/' + dog.id.toString(), dog);
    }

    deleteDog(id: number): Observable<DogModel> {

        return this.http.delete<DogModel>(this.baseUrl + '/dog/delete/' + id.toString());
    }
}
