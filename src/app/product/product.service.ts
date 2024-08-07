import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }



  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/api/products');
  }
  
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/products/${productId}`);
  }

  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/products/${productId}/update-full`, product);
  }

  checkProductName(name: string): Observable<boolean> {
    const params = new HttpParams().set('name', name);
    return this.http.get<boolean>(this.apiUrl+'/api/products/check-name', { params });
  }


}
