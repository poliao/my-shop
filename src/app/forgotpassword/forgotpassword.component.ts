import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { ForgotpasswordService } from './forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  email: string = '';
  codes: string = '';
  reset_code: string = '';
  code_creation_time: number = 0; // Time when code is generated
  readonly CODE_EXPIRATION_TIME: number = 60 * 1000; // 60 seconds in milliseconds
  private localstorge: Storage;

  constructor(private router: Router,
              private forgotpasswordService: ForgotpasswordService
  ) {this.localstorge = window.localStorage; }

  // Generate random code
  generateRandomCode(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      code += chars[randomIndex];
    }
    return code;
  }

  // Send email using EmailJS
  sendResetCode(email: string) {
    this.forgotpasswordService.getCheckemail(email).subscribe(
      (response: boolean) => {
        if (response) {
          // If email exists, send the reset code
          const code = this.generateRandomCode(6);
          this.reset_code = code;
          this.code_creation_time = Date.now(); // Store current time

          const templateParams = {
            to_email: email,
            reset_code: code
          };
          emailjs.send('service_wa32txk', 'template_3ccxm1a', templateParams, 'hkpb08D3ZGHYTJzBY')
            .then((response) => {
              Swal.fire('Hi', 'ส่งรหัสยืนยันไปยังอีเมลของคุณแล้ว!', 'success');
            }, (error) => {
              console.error('Error sending email', error);
            });
        } else {
          // Show error if email does not exist
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'อีเมลนี้ไม่มีในระบบ!'
          });
        }
      },
      (error) => {
        console.error('Error checking email existence', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'เกิดข้อผิดพลาดในการตรวจสอบอีเมล!'
        });
      }
    );
  }
  // Handle form submission
  onSubmit() {
    if (this.email) {
      this.sendResetCode(this.email);
    } else {
      console.log('Please enter an email address.');
    }
  }

  // Check the reset code
  checkcode() {
    const currentTime = Date.now();
    if (currentTime - this.code_creation_time > this.CODE_EXPIRATION_TIME) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'รหัสหมดอายุแล้ว!'
      });
      return;
    }

    if (this.codes === this.reset_code) {
      this.localstorge.setItem('email', this.email);
      this.router.navigate(['/changepassword']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'รหัสไม่ถูกต้อง!'
      });
    }
  }
}
