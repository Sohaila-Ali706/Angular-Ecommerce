import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { Subscription } from 'rxjs'; // تأكد من استيراد Subscription هنا

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  wishlistCount: number = 0;

  // إضافة Subscriptions لتخزين الاشتراكات
  private cartCountSubscription: Subscription | undefined; // السماح للقيمة بأن تكون undefined
  private wishlistCountSubscription: Subscription | undefined; // السماح للقيمة بأن تكون undefined

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    // الاشتراك في الـ Observable الخاص بالعدد
    this.cartCountSubscription = this.cartService.getCartCountObservable().subscribe(count => {
      this.cartCount = count;
    });

    this.wishlistCountSubscription = this.wishlistService.getWishlistCountObservable().subscribe(count => {
      this.wishlistCount = count;
    });
  }

  ngOnDestroy() {
    // التأكد من إلغاء الاشتراكات لتجنب تسريب الذاكرة
    if (this.cartCountSubscription) {
      this.cartCountSubscription.unsubscribe();
    }
    if (this.wishlistCountSubscription) {
      this.wishlistCountSubscription.unsubscribe();
    }
  }
}
