import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  validateForm(): boolean {
    // التحقق من النيم
    if (this.formData.firstName.length < 3) {
      this.message = { text: 'First name must be at least 3 characters.', type: 'error' };
      return false;
    }

    // التحقق من التليفون
    const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
    if (!phoneRegex.test(this.formData.phone)) {
      this.message = { text: 'Phone number must be valid (010, 011, 012, 015).', type: 'error' };
      return false;
    }

    // التحقق من الجيميل
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(this.formData.email)) {
      this.message = { text: 'Email must be a valid Gmail address.', type: 'error' };
      return false;
    }

    return true;
  }

  placeOrder(form: NgForm) {
    if (!form.valid) {
      this.message = { text: 'Please fill all required fields.', type: 'warning' };
      return;
    }

    if (this.cartItems.length === 0) {
      this.message = { text: 'Your cart is empty.', type: 'warning' };
      return;
    }

    // التحقق من صحة البيانات قبل إتمام الطلب
    if (!this.validateForm()) {
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
