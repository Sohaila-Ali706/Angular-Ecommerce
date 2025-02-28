import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  cardone =[
    {
      "title": "HAVIT HV-G92 Gamepad",
      "url": "g92-2-500x500 1.png",
    },
  ]

  threeCards =[
    {
      
      "title": "AK-900 Wired Keyboard ",
      "url": "ak-900-01-500x500 1.png",
      
    },
    {
      
      "title": "IPS LCD Gaming Monitor ",
      "url": "g27cq4-500x500 1.png",
      
    },
    {
      
      "title": "S-Series Comfort Chair  ",
      "url": "273c46e1c3dc0a8915c4b031d347.png",
      
    },  
  ]
}
