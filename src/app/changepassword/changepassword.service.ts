import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  updateCustomerByEmail(email: string, updatedCustomer: any): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.put<any>(`${this.apiUrl}/customers/update-by-email`, updatedCustomer, { params });
  }
}
