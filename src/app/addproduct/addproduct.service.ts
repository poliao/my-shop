import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
 

  private apiUrl = 'https://api.bytescale.com/v2/accounts/FW25c9q/uploads/form_data';
  private apiKey = 'public_FW25c9qBE672spLDRBXUvVFTXpN8';
  private apisavebase = 'http://localhost:8080/api/products'
  private apicheckbase = 'http://localhost:8080/api/products/check-name';


  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.post(this.apiUrl, formData, { headers });
  }

  checkProductName(name: string): Observable<boolean> {
    const params = new HttpParams().set('name', name);
    return this.http.get<boolean>(this.apicheckbase, { params });
  }

  save(FormData: any): Observable<any> {
    return this.http.post(this.apisavebase, FormData);
  }
}
