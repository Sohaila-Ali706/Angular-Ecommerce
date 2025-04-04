import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: false
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;
  defaultImage: string = 'assets/default-image.jpg';

  ngOnInit() {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];

    this.cartItems = this.cartItems.map(item => ({
      ...item,
      image: item?.image || this.defaultImage
    }));

    console.log('Cart Items:', this.cartItems); 

    this.calculateSubtotal();
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateSubtotal();
  }

  placeOrder() {
    alert('Your order has been placed!');
  }
}
