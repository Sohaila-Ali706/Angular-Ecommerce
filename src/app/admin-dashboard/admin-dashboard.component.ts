import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: any[] = [];
  newTitle = '';
  newPrice = 0;

  editId: number | null = null;
  editTitle = '';
  editPrice = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  addProduct() {
    const newProduct = { title: this.newTitle, price: this.newPrice };
    this.productService.addProduct(newProduct).subscribe(() => {
      this.loadProducts();
      this.newTitle = '';
      this.newPrice = 0;
    });
  }

  openEdit(product: any) {
    this.editId = product.id;
    this.editTitle = product.title;
    this.editPrice = product.price;
  }

  saveEdit() {
    if (this.editId !== null) {
      const updatedProduct = { title: this.editTitle, price: this.editPrice };
      this.productService.updateProduct(this.editId, updatedProduct).subscribe(() => {
        this.loadProducts();
        this.editId = null;
        this.editTitle = '';
        this.editPrice = 0;
      });
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
