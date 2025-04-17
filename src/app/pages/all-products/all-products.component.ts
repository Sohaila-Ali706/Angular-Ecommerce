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
    // تحميل المنتجات من الـ API
    this.global.getPosts().subscribe((res) => {
      this.products = res.products;
      console.log('all products:', res);
    });

    // تحكم في الـ setTimeout (لوجيك الـ loading)
    setTimeout(() => {
      this.isLoading = false; 
    }, 800);  // بعد ثانية واحدة، اختفاء الـ loading

    // التعامل مع query params من الرابط
    this.route.queryParams.subscribe((params) => {
      const categoryFromQuery = params['category'];
      if (categoryFromQuery) {
        // يمكن هنا تضيف فلترة حسب الـ category إذا لزم الأمر
      }
      // هذا السطر يمكن تفعيله حسب الحاجة
      // this.applyFilter();
    });
  }
}
