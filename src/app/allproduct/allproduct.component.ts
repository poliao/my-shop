import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllproductService } from './allproduct.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  

  products: any[] = [];

  constructor(private router:Router,
              private allproductservice:AllproductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  editProduct(product: any) {
    console.log('Edit product:', product);
    // Add your edit logic here
  }

  deleteProduct(product: any) {
    console.log('Delete product:', product);
    // Add your delete logic here
  }

  getAllProducts(): void {
    this.allproductservice.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

  goToBackmenu() {
    this.router.navigate(['/menu']);
  }
}
