import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  

  products = [
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },
  
    { id: 1,  name: 'โค้ก', stock: 12, costPrice: 20, wholesalePrice: 29, retailPrice: 30 },

  
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editProduct(product: any) {
    console.log('Edit product:', product);
    // Add your edit logic here
  }

  deleteProduct(product: any) {
    console.log('Delete product:', product);
    // Add your delete logic here
  }

  goToBackmenu() {
    this.router.navigate(['/menu']);
  }
}
