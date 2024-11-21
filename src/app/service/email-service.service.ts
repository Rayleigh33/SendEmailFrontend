import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private apiUrl = 'http://localhost:8080/email'; // Adjust for your backend URL

  constructor(private http: HttpClient) {}

  sendEmail(email: { to: string; subject: string; body: string }): Observable<string> {
    return this.http.post(this.apiUrl, email,{responseType: 'text'});
  }
}
