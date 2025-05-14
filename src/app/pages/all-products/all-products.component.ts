import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  isLoading = true;

  constructor(
    private global: GlobalService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   
  this.global.getPosts().subscribe((res) => {
    this.products = res.products;

    // ناخد الكاتيجوري من الـ query params
    const categoryFromQuery = this.route.snapshot.queryParamMap.get('category');

    // فلترة حسب الكاتيجوري لو موجودة
    if (categoryFromQuery) {
      this.filteredProducts = this.products.filter(
        (p) => p.category === categoryFromQuery
      );
    } else {
      this.filteredProducts = this.products;
    }

    // إلغاء اللودينج
    this.isLoading = false;
  });


  }
}
