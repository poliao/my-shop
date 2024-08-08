import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }



  getCheckemail(email: string): Observable<boolean> {
    const params = new HttpParams().set('email', email);
    return this.http.get<boolean>(this.apiUrl+'/customers/check-email', { params });
  }
}
