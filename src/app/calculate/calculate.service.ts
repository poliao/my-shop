import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }



  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/api/products');
  }
}
