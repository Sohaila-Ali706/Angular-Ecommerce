import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

declare var window: any;

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
products: any[] = [];
  newTitle = '';
  newPrice: number = 0;

  editId: number | null = null;
  editTitle = '';
  editPrice: number = 0;

  constructor(private global: GlobalService) {}

  ngOnInit(): void {
    this.global.getPosts().subscribe((res: any) => {
      this.products = res.products;
    });
  }

 
  addProduct(newProduct: any) {
    const newId = this.products.length + 1;
    this.products.push({ ...newProduct, id: newId });
    this.newTitle = '';
    this.newPrice = 0;
  }

 
  openEditModal(product: any) {
    this.editId = product.id;
    this.editTitle = product.title;
    this.editPrice = product.price;
    const modal = new window.bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }

  
  saveEdit() {
    const index = this.products.findIndex(p => p.id === this.editId);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        title: this.editTitle,
        price: this.editPrice
      };
    }
    const modal = window.bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
  }

  
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

}
