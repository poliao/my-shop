import { Component, OnInit } from '@angular/core';
import { CalculateService } from './calculate.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {
  products: any[] = [];
  cartItems: any[] = [];
  inputForm: FormGroup;
  selectedProduct: any;
  numberInputValue: any[] = [];
  filteredProducts: any[] = [];

  constructor(private calculateservice: CalculateService,
    private router: Router,
    private fb: FormBuilder
  ) {

    this.inputForm = this.fb.group({
      numberInput: [null, [Validators.required, Validators.min(1), Validators.max(999),this.maxStockValidator.bind(this)]]
    });
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  removeItemAtIndex(): void {
    if (this.cartItems.length > 0) {
      this.cartItems.pop();
      console.log("Item removed. Updated cartItems:", this.cartItems);
    } else {
      console.log("No items to remove.");
    }
  }

  goToBackmenu() {
    this.router.navigate(['/menu']);
  }

  showModal(): void {
    const modalElement = document.getElementById('inputModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }

  onSubmit(): void {
    if (this.inputForm) {
      if (this.selectedProduct) {
        this.numberInputValue = this.inputForm.get('numberInput')?.value;
        // ตรวจสอบว่ามีสินค้าที่มีชื่อเดียวกันใน cartItems หรือไม่
        const duplicateProduct = this.cartItems.find(item => item.name === this.selectedProduct.name);
        if (!duplicateProduct) {
          this.selectedProduct.numberInput = this.numberInputValue;
          this.cartItems.push(this.selectedProduct);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "กรุณาลบสินค้าที่มีชื่อเดียวกันและเลือกสินค้าใหม่!"
          });
        }
      } else {
        console.log("No selected product to add.");
      }
    }
  }

  get total() {
    return this.cartItems.reduce((acc, item) => acc + item.retailPrice * item.numberInput, 0);
  }

  onCardClick(product: any, index: number): void {
    this.selectedProduct = product[index];
    console.log('Clicked Product:', this.selectedProduct);
    console.log('Card Index:', index); // Log the index of the clicked card
    this.showModal();
  }

  getAllProducts(): void {
    this.calculateservice.getAllProducts().subscribe(
      (data) => {
        // Filter out products with stock = 0
        const productsToDelete = data.filter((product: any) => product.stock === 0);
        const availableProducts = data.filter((product: any) => product.stock > 0);
  
        // Delete products with stock = 0
        productsToDelete.forEach((product: { id: number; }) => {
          this.calculateservice.deleteProduct(product.id).subscribe(
            () => {
              console.log(`Product with id ${product.id} deleted successfully`);
              // After deleting, refresh the products list
              this.getAllProducts();
            },
            (error) => {
              console.error('Error deleting product', error);
            }
          );
        });
  
        // Sort the remaining products by id
        this.products = availableProducts.sort((a: any, b: any) => a.id - b.id);
  
        // Update filteredProducts to include only available products
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
  
  
  

  updateProduct(): void {
    this.cartItems.forEach(item => {
      const productInStock = this.products.find(product => product.id === item.id);
      if (productInStock) {
        const updatedStock = productInStock.stock - item.numberInput;
      console.log(`Updated stock for product ID ${item.id}:`, updatedStock);
      
        this.calculateservice.updateProductStock(item.id, updatedStock).subscribe(
          response => {
            console.log(`Product stock updated successfully for product ID ${item.id}:`, response);
            location.reload()
          },
          error => {
            console.error(`Error updating product stock for product ID ${item.id}:`, error);
          }
        );
      }
    });
  }

  maxStockValidator(control: AbstractControl): { [key: string]: any } | null {
    if (this.selectedProduct && control.value > this.selectedProduct.stock) {
      return { maxStock: true };
    }
    return null;
  }
}


