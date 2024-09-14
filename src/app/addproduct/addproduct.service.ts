import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
 

  private apiUploadUrl = 'http://localhost:8080/api/products/upload'; // เปลี่ยนเป็น URL ใหม่
  private apisavebase = 'http://localhost:8080/api/products';
  private apicheckbase = 'http://localhost:8080/api/products/check-name';

  constructor(private http: HttpClient) { }

  // อัปโหลดไฟล์ไปยัง API ใหม่
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('files', file); // ชื่อฟิลด์ควรตรงกับ @RequestParam ใน Backend

    return this.http.post(this.apiUploadUrl, formData); // ไม่ต้องใช้ Headers
  }

  checkProductName(name: string): Observable<boolean> {
    const params = new HttpParams().set('name', name);
    return this.http.get<boolean>(this.apicheckbase, { params });
  }

  save(FormData: any): Observable<any> {
    return this.http.post(this.apisavebase, FormData);
  }
}
