import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
  private cartSubject = new BehaviorSubject<any[]>(this.cart);
  private cartCountSubject = new BehaviorSubject<number>(this.getCartCount());

  constructor() {
    this.loadCart();
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
        image: product.image || product.thumbnail || 'assets/default-image.png'
      });
    }
    this.updateCart();
  }

  removeFromCart(productId: number) {
    const productIndex = this.cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      if (this.cart[productIndex].quantity > 1) {
        this.cart[productIndex].quantity -= 1;
      } else {
        this.cart.splice(productIndex, 1);
      }
      this.updateCart();
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product && quantity > 0) {
      product.quantity = quantity;
      this.updateCart();
    }
  }

  getSubtotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next([...this.cart]);
    const cartCount = this.getCartCount();
    this.cartCountSubject.next(cartCount);
  }

  private loadCart() {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedCart) {
      this.cart = storedCart;
      this.cartSubject.next([...this.cart]);
      const cartCount = this.getCartCount();
      this.cartCountSubject.next(cartCount);
    }
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }

  getCartCountObservable() {
    return this.cartCountSubject.asObservable();
  }
}
