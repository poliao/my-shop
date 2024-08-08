import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  inputForm: FormGroup;
  filteredProducts: any[] = [];
  selectedProduct: any;
  modalInstance: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.inputForm = this.fb.group({
      name: [''],
      id: [''],
      retailPrice: [''],
      stock: ['']
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.checkToken();
  }

  addProduct() {
    this.router.navigate(['/addproduct']);
  }

  removeProduct() {
    this.products = this.products.filter(p => p !== this.selectedProduct);
  }

  showModal(): void {
    const modalElement = document.getElementById('inputModal');
    if (modalElement) {
      this.modalInstance = new (window as any).bootstrap.Modal(modalElement);
      this.modalInstance.show();
    } else {
      console.error('Modal element not found');
    }
  }

  onCardClick(product: any, index: number): void {
    this.selectedProduct = this.products[index];
    this.inputForm.patchValue({
      name: this.selectedProduct.name,
      id: this.selectedProduct.id,
      retailPrice: this.selectedProduct.retailPrice,
      stock: this.selectedProduct.stock
    });
    this.showModal();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        const availableProducts = data.filter((product: any) => product.stock > 0);
        this.products = availableProducts.sort((a: any, b: any) => a.id - b.id);
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  updateProduct() {
    this.productService.updateProduct(this.selectedProduct.id, this.inputForm.value).subscribe(
      () => {
        console.log('Product updated successfully');
        this.getAllProducts();
        if (this.modalInstance) {
          this.modalInstance.hide();}
          Swal.fire('success', 'แก้ไขสินค้าสำเร็จ!', 'success');
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }

  deleteProduct() {
    this.productService.deleteProduct(this.selectedProduct.id).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.getAllProducts();
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    )
  }

  checkToken() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // หากไม่มี token, ให้ redirect ไปยังหน้า login
      this.router.navigate(['/login']);
    }
  }

  goToBackmenu() {
    this.router.navigate(['/menu']);
  }
}