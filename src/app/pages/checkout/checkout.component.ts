import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
   standalone: false,
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  formData = {
    firstName: '',
    company: '',
    street: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: false
  };
  couponCode: string = '';
  paymentMethod: string = 'cash';
  discount: number = 0;

  validCoupons: string[] = ['sohaila', 'mohamed', 'shahinda'];
  message: { text: string, type: 'success' | 'error' | 'warning' } | null = null;


  ngOnInit() {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  get subtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  get total(): number {
    return this.subtotal - (this.subtotal * this.discount);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  applyCoupon() {
    if (this.validCoupons.includes(this.couponCode.toLowerCase())) {
      this.discount = 0.2;
      this.message = { text: 'Coupon applied successfully! 20% discount added.', type: 'success' };
    } else {
      this.discount = 0;
      this.message = { text: 'Invalid coupon code.', type: 'error' };
    }
  }

  placeOrder() {
    if (!this.formData.street || !this.formData.city || !this.formData.phone) {
      this.message = { text: 'Please fill all required fields.', type: 'warning' };
      return;
    }

    if (this.cartItems.length === 0) {
      this.message = { text: 'Your cart is empty.', type: 'warning' };
      return;
    }

    console.log('Order placed!', {
      items: this.cartItems,
      address: this.formData,
      payment: this.paymentMethod,
      total: this.total
    });

    this.message = { text: 'Your order has been placed!', type: 'success' };
  }
}
