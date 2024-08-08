import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  
  constructor(
    private router: Router 
  
    
  ) {}
  ngOnInit(): void {
    this.checkToken()
  }
  
  goToallproduct(){
    this.router.navigate(['/allproduct']);
  }

  goToaddproduct(){
    this.router.navigate(['/product']);
  }

  goTohistorysale(){
    this.router.navigate(['/historysale']);
  }

  goTocalculat(){
    this.router.navigate(['/calculate']);
  }

  checkToken() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // หากไม่มี token, ให้ redirect ไปยังหน้า login
      this.router.navigate(['/login']);
    }
  }
}
