import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddproductService } from './addproduct.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productForm: FormGroup;
  imageSrc: string | ArrayBuffer | null = null;
  showimg: boolean = false;
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private addproductService: AddproductService
  ) {
    this.productForm = this.fb.group({
      image: [null,Validators.required],
      name: [null, Validators.required],
      costPriceHeader:[null, Validators.required],
      wholesalePrice: [null, Validators.required],
      retailPrice: [null, Validators.required],
      stock: [null, Validators.required]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      this.showimg = true;
      reader.readAsDataURL(file);
    }
  }

  onRemoveImage(): void {
    this.imageSrc = null;
    this.showimg = false;
    this.productForm.get('image')?.reset();
    this.selectedFile = null;
  }

  onSubmit() {
    this.addproductService.checkProductName(this.productForm.get('name')?.value).subscribe(isDuplicate => {
      if (isDuplicate) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "มีสินค้าชื่อซ้ำกันในคลัง!"
        });

      } else {
        if (this.productForm.valid && this.selectedFile) {
          this.addproductService.uploadImage(this.selectedFile).subscribe(response => {
            this.imageSrc = response.files[0].fileUrl;
            this.productForm.patchValue({ image: this.imageSrc });
            this.addproductService.save(this.productForm.value).subscribe(response => {
              Swal.fire('Hi', 'We have been informed!', 'success');
              this.productForm.reset();
              this.selectedFile = null;
              this.imageSrc = null;
              this.showimg = false;
            },
              error => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "กรุณากรอกฟอร์มให้ครบถ้วน!"
                });
                console.error('Login failed', error);
              })
          });
        }
        else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "กรุณากรอกฟอร์มให้ครบถ้วน!"
          });
        }
      }
    });

  }

  goToBackmenu() {
    this.router.navigate(['/menu']);
  }
}
