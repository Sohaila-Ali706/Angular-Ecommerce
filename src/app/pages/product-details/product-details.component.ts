import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  constructor(
    private activated: ActivatedRoute,
    public global: GlobalService
  ) {}

  cards: any;
  ngOnInit() {
    const cardID = this.activated.snapshot.paramMap.get('cardId');
    this.global.getSinglePost(cardID).subscribe(res => {
      console.log(res); 
      this.cards = res;
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
  
  wishlistActive = false;
  
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
  
  toggleWishlist() {
  
  this.wishlistActive = !this.wishlistActive;
  
  }
}
