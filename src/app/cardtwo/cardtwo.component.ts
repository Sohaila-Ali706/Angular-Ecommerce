import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-cardtwo',
  standalone: false,
  templateUrl: './cardtwo.component.html',
  styleUrl: './cardtwo.component.css'
})

export class CardtwoComponent {
  filteredProducts: any[] = [];
  
  category = [
    { i: "fa-solid fa-mobile-screen", title: "mobile-accessories" },
    { i: "fa-solid fa-laptop", title: "laptops" },
    { i: "fa-solid fa-couch", title: "furniture" },
    { i: "fa-solid fa-blender", title: "kitchen-accessories" },
    { i: "fa-solid fa-shirt", title: "mens-shirts" },
    { i: "fa-solid fa-shoe-prints", title: "mens-shoes" },
    { i: "fa-regular fa-clock", title: "mens-watches" },
    { i: "fa-solid fa-spray-can-sparkles", title: "beauty" },
    { i: "fa-solid fa-wine-bottle", title: "fragrances" },
    { i: "fa-solid fa-basket-shopping", title: "groceries" },
    { i: "fa-solid fa-house", title: "home-decoration" }
  ];
  constructor(private router: Router,  private global: GlobalService) {}
  
 filterCategory(category: string) {
   this.router.navigate(['/all-products'], { queryParams: { category } });
 }

}
