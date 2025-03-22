import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  cards:any =[]
  res: any;
    constructor (public global: GlobalService) {
    console.log(this.global.getPosts())
  
   this.global.getPosts().subscribe(res=>{
    console.log(res)
    this.cards =res.products
   })
  
    }
}
