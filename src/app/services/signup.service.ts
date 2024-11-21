import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:8081/api/auth'; // Updated to match Spring Boot controller endpoint

  constructor(private http: HttpClient) {}

  register(user: Compte): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  login(user: Compte): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }}
