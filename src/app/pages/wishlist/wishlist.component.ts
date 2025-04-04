import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  cards: any[] = [];
  wishlistItems: any[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {
    this.wishlistService.getWishlist().subscribe((data: any[]) => {
      this.wishlistItems = data;
    });
  }

  ngOnInit() {
    this.wishlistService.getWishlist().subscribe((data: any[]) => {
      this.cards = data;
    });
  }

  toggleWishlist(product: any) {
    if (this.isProductInWishlist(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
    } else {
      this.wishlistService.addToWishlist(product);
    }
  }

  isProductInWishlist(productId: number): boolean {
    return this.wishlistItems.some(item => item.id === productId);
  }

  moveAllToBag() {
    this.wishlistItems.forEach(product => {
      this.cartService.addToCart(product);
      this.wishlistService.removeFromWishlist(product.id);
    });
  }

  clearWishlist() {
    this.wishlistService.clearWishlist();
  }
  
  removeProductFromWishlist(productId: number) {
    this.wishlistService.removeFromWishlist(productId);
  }
}
