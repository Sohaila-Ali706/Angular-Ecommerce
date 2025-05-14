import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
  standalone:false
})
export class OrderConfirmationComponent implements OnInit {
  checkout: any;
  randomOrderNumber = Math.floor(Math.random() * 1000000);

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { checkout: any };
    this.checkout = state?.checkout;

    if (this.checkout) {
      this.saveOrderToLocalStorage(this.checkout);
    }
  }

  saveOrderToLocalStorage(order: any): void {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    const newOrder = {
      ...order,
      orderId: `ORD-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      date: new Date().toISOString(),
      status: 'Processing'
    };
    localStorage.setItem('orderHistory', JSON.stringify([newOrder, ...orderHistory]));
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
