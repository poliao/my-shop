import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllproductService } from '../allproduct/allproduct.service';
import { HistorysaleService } from './historysale.service';

@Component({
  selector: 'app-historysale',
  templateUrl: './historysale.component.html',
  styleUrls: ['./historysale.component.css']
})
export class HistorysaleComponent {

  products: any[] = [];
  selectedYear: string = '';
  selectedMonth: string = '';

  constructor(private router:Router,
              private historySaleService:HistorysaleService
  ) { }

  ngOnInit(): void {
    this.submitFilters();
  }

  editProduct(product: any) {
    console.log('Edit product:', product);
    // Add your edit logic here
  }

  deleteProduct(product: any) {
    console.log('Delete product:', product);
    // Add your delete logic here
  }

  
  submitFilters(): void {
      this.historySaleService.getSaleSummary(Number(this.selectedMonth), Number(this.selectedYear)).subscribe(
        data => {
          this.products = data;
          console.log('Sale Summary:', data);
        },
        error => {
          console.error('Error fetching sale summaries', error);
        }
      );
    
  }
  

  goToBackmenu() {
    this.router.navigate(['/menu']);
  }
}
