import { Component } from '@angular/core';

@Component({
  selector: 'app-card-three',
  standalone: false,
  templateUrl: './card-three.component.html',
  styleUrl: './card-three.component.css'
})
export class CardThreeComponent {
[x: string]: any;
items =[

  {
  
    "title": "FREE AND FAST DELIVERY",
    "icon": "fa-solid fa-truck",
    "p" : "Free delivery for all orders over $140",
    
  },
  {
    
    "title": "24/7 CUSTOMER SERVICE ",
    "icon": "fa-solid fa-headset",
    "p" : "Friendly 24/7 customer support",
    
  },
  {
    
    "title": "MONEY BACK GUARANTEE ",
    "icon": "fa-solid fa-shield",
    "p" : "We reurn money within 30 days",
    
  },

]

}
