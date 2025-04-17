import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-inex',
  standalone: false,
  templateUrl: './inex.component.html',
  styleUrl: './inex.component.css'
})
export class InexComponent implements OnInit {

  isLoading = true;
  cards: any[] = [];

  constructor(public global: GlobalService) {}

  ngOnInit() {
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');

    if (!hasSeenLoading) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        sessionStorage.setItem('hasSeenLoading', 'true');

        this.loadProducts(); // نحمل المنتجات بعد انتهاء التحميل
      }, 1000);
    } else {
      this.isLoading = false;
      this.loadProducts(); // نحمل المنتجات على طول
    }
  }

  loadProducts() {
    this.global.getPosts().subscribe(res => {
      console.log(res);
      this.cards = res.products;
    });
  }
}
