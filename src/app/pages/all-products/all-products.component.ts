import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  products: any[] = [];

  constructor(private global: GlobalService) {
    this.global.getPosts().subscribe((res) => {
      console.log(res);
      this.products = res.products;
    });
    
  }
}
