import { Component, OnInit } from '@angular/core';
import { CalculateService } from './calculate.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

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

  constructor(private calculateservice: CalculateService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.inputForm = this.fb.group({
      numberInput: ['', [Validators.required, Validators.min(0), Validators.max(9999999)]]
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
  
  
  onSubmit(): void {
    if (this.inputForm) {
      this.numberInputValue = this.inputForm.get('numberInput')?.value;
      if (this.selectedProduct) {
        
        this.cartItems.push(this.selectedProduct);
        
      } else {
        console.log("No selected product to add.");
      }
    }
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
        this.products = data;
      }
    );
  }
}
