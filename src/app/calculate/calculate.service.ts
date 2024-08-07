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
  
  updateProductStock(productId: number, stock: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/products/${productId}/update-stock`, { stock } );
  }
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/products/${productId}`);
  }
  saveHistory(FormData: any): Observable<any> {
    return this.http.post(this.apiUrl+'/api/sales', FormData);
  }
}
