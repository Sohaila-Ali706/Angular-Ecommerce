import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { GlobalService } from '../../services/global.service'; // ⬅️ اضفنا الجلوبال سيرفيس
import { map } from 'rxjs/operators'; // ⬅️ هنحتاجه لاختيار المنتجات عشوائياً

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  cards: any[] = [];
  wishlistItems: any[] = [];
  randomProducts: any[] = []; // ⬅️ هنا هنخزن 4 منتجات عشوائية

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private globalService: GlobalService // ⬅️ Inject الجلوبال سيرفيس
  ) {
    this.wishlistService.getWishlist().subscribe((data: any[]) => {
      this.wishlistItems = data;
    });
  }

  ngOnInit() {
    this.wishlistService.getWishlist().subscribe((data: any[]) => {
      this.cards = data;
    });

    // نجيب الـ 100 منتج ونختار 4 منهم عشوائي
    this.globalService.getPosts()
      .pipe(
        map((res: any) => res.products), // products موجودين جوا res
        map((products: any[]) => this.getRandomProducts(products, 4)) // ناخد 4 عشوائي
      )
      .subscribe((randomProducts: any[]) => {
        this.randomProducts = randomProducts;
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

  // دالة تجيب منتجات عشوائية
  private getRandomProducts(products: any[], count: number): any[] {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
