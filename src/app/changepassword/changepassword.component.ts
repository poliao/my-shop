import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangepasswordService } from './changepassword.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  email: string | null = null;
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private router: Router,
    private changepasswordService: ChangepasswordService
  ) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }

  onSubmit(): void {
    if (!this.email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email not found. Please try again.'
      });
      return;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!'
      });
      return;
    }

    const updatedCustomer = { password: this.password };

    this.changepasswordService.updateCustomerByEmail(this.email, updatedCustomer).subscribe(
      response => {
        console.log('Password changed successfully', response);
        Swal.fire('Success', 'Password changed successfully', 'success');
        this.router.navigate(['/login']);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password change failed! Please try again later.'
        });
        console.error('Password change failed', error);
      }
    );
  }
}
