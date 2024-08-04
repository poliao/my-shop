import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  password = "";


  constructor(
    private router: Router ,
    private loginService: LoginService
    
  ) {}

  onSubmit() {
    console.log(this.username,this.password);
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        // ทำการนำทางไปยังหน้าที่ต้องการหลังจากล็อกอินสำเร็จ
        Swal.fire('Hi', 'We have been informed!', 'success');
        this.router.navigate(['/menu']);
      },
      error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed!"
        });
        console.error('Login failed', error);
        
      }
    );
  }
}
