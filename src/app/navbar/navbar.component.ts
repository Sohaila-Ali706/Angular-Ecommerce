import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { SharedService } from '../services/shared.service';
import { GlobalService } from '../services/global.service';
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

  searchTerm: string = '';

  // إضافة Subscriptions لتخزين الاشتراكات
  private cartCountSubscription: Subscription | undefined; // السماح للقيمة بأن تكون undefined
  private wishlistCountSubscription: Subscription | undefined; // السماح للقيمة بأن تكون undefined

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private sharedService: SharedService,
    private router: Router,
    private global: GlobalService
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
  search() {
    this.router.navigateByUrl(`/category/${this.searchTerm}`)
   // const trimmed = this.searchTerm.trim().toLowerCase();
  
    //if (trimmed) {
    //  this.sharedService.setSearchTerm(trimmed);
    //  this.sharedService.setCategory(""); 
  
      
    //  this.router.navigate(['/all-products'], {
    //    queryParams: { search: trimmed }
     // });
   // }
  }
}
