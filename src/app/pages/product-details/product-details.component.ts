import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    public global: GlobalService
  ) {}

  cards: any;
  wishlist: any[] = [];
  wishlistActive = false;

  ngOnInit() {
    const cardID = this.activated.snapshot.paramMap.get('cardId');
    this.global.getSinglePost(cardID).subscribe(res => {
      console.log(res);  // تحقق من البيانات المستلمة
      this.cards = res;

      // التحقق من الصور
      console.log('Product Thumbnail:', this.cards?.thumbnail);
      console.log('Product Images:', this.cards?.images);

      this.loadWishlist();
      this.wishlistActive = this.isInWishlist(this.cards?.id);
    });
  }

  @Input() discountFlag = false;
  @Input() new = false;
  @Input() iconone = true;
  @Input() icontwo = true;
  @Input() iconthree = false;
  @Input() delprice = true;
  @Input() stars = true;

  quantity = 1;
  selectedSize: string = '';
  selectedColor: string = '';

  product = {
    mainImage: 'Frame 894.png',
    colors: ['#ff0000', '#0000ff', '#808080'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  loadWishlist() {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      this.wishlist = JSON.parse(storedWishlist);
    }
  }

  isInWishlist(productId: number) {
    return this.wishlist.some(item => item.id === productId);
  }

  toggleWishlist() {
    if (this.isInWishlist(this.cards.id)) {
      this.wishlist = this.wishlist.filter(item => item.id !== this.cards.id);
    } else {
      this.wishlist.push(this.cards);
    }
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.wishlistActive = !this.wishlistActive;
  }

  // ✅ الزر Buy Now
  buyNow() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const productToAdd = {
      id: this.cards?.id,
      title: this.cards?.title,
      price: this.cards?.price,
      image: this.cards?.thumbnail || (this.cards?.images && this.cards?.images[0]) || 'assets/default-image.png', // استخدم صورة افتراضية إذا لم توجد
      quantity: this.quantity
    };

    // سجل المنتج الذي سيتم إضافته
    console.log('Adding product to cart:', productToAdd);

    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));

    // ✅ الانتقال لصفحة الـ checkout
    this.router.navigate(['/checkout']);
  }
}
