import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
    { name: 'CocaCola', code: 32162, price: 29, stock: 20, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' },
 
    // Add more products as needed
  ];

  selectedProduct = this.products[0];

  addProduct() {
    const newProduct = { name: 'New Product', code: 12345, price: 50, stock: 10, image: 'https://upcdn.io/FW25c9q/raw/uploads/2024/08/06/4kRaFJr7BT-b63ae176c9664e888f7825584c95cd54.jpg' };
    this.products.push(newProduct);
  }

  removeProduct() {
    this.products = this.products.filter(p => p !== this.selectedProduct);
  }

}
