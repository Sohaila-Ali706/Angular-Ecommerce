import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: 'Monitor-Cart-Small.png' },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: 'Gamepad-Cart-Small.png' }
  ];

  couponCode: string = '';

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cartItems.find(item => item.id === id);
    if (item && quantity >= 1) {
      item.quantity = quantity;
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  applyCoupon() {
    if (this.couponCode === 'DISCOUNT10') {
      alert('Coupon applied! 10% discount');
    } else {
      alert('Invalid coupon code');
    }
  }
}
