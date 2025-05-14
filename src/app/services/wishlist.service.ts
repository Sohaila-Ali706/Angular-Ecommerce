import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
  private wishlistSubject = new BehaviorSubject<any[]>(this.wishlist);
  private wishlistCountSubject = new BehaviorSubject<number>(this.getWishlistCount());

  constructor() {
    this.loadWishlist();
  }

  getWishlist() {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(product: any) {
    const exists = this.wishlist.some(item => item.id === product.id);
    if (!exists) {
      this.wishlist.push(product);
      this.updateWishlist();
    }
    this.wishlistSubject.next([...this.wishlist]);
    this.updateWishlistCount();
  }

  removeFromWishlist(productId: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== productId);
    this.updateWishlist();
    this.wishlistSubject.next([...this.wishlist]);
    this.updateWishlistCount();
  }

  private updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.wishlistSubject.next([...this.wishlist]);
  }

  private loadWishlist() {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (storedWishlist) {
      this.wishlist = storedWishlist;
      this.wishlistSubject.next([...this.wishlist]);
      this.updateWishlistCount();
    }
  }

  clearWishlist() {
    this.wishlist = [];
    this.updateWishlist();
    this.updateWishlistCount();
  }

  isProductInWishlist(productId: number): boolean {
    return this.wishlist.some(item => item.id === productId);
  }

getWishlistCountObservable() {
  return this.wishlistCountSubject.asObservable();
}

  getWishlistCount(): number {
    return this.wishlist.length;
  }

  private updateWishlistCount() {
    this.wishlistCountSubject.next(this.getWishlistCount());
  }
}
