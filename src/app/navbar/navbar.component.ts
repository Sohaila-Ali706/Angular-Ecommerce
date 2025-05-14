import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { SharedService } from '../services/shared.service';
import { GlobalService } from '../services/global.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service'; // ✅ استيراد AuthService

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  wishlistCount: number = 0;
  searchTerm: string = '';

  private cartCountSubscription: Subscription | undefined;
  private wishlistCountSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private sharedService: SharedService,
    private router: Router,
    private global: GlobalService,
    private authService: AuthService // ✅ حقن AuthService
  ) {}

  ngOnInit() {
    this.cartCountSubscription = this.cartService.getCartCountObservable().subscribe(count => {
      this.cartCount = count;
    });

    this.wishlistCountSubscription = this.wishlistService.getWishlistCountObservable().subscribe(count => {
      this.wishlistCount = count;
    });
    
  }

  ngOnDestroy() {
    if (this.cartCountSubscription) this.cartCountSubscription.unsubscribe();
    if (this.wishlistCountSubscription) this.wishlistCountSubscription.unsubscribe();
  }

  search() {
    this.router.navigateByUrl(`/category/${this.searchTerm}`);
  }

  logout() {
    this.authService.logout();            // ✅ حذف التوكن
    this.router.navigate(['/login']);     // ✅ توجيه المستخدم
  }
  
}
