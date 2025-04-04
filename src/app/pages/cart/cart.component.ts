import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  couponCode: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cartItems = cart;
    });
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity >= 1) {
      this.cartService.updateQuantity(id, quantity);
    }
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    // تحديث العرض بعد الحذف
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  applyCoupon() {
    if (this.couponCode === 'DISCOUNT10') {
      alert('Coupon applied! 10% discount');
    } else {
      alert('Invalid coupon code');
    }
  }

  goToCheckout() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.router.navigate(['/checkout']);
  }
}
