import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
categories = [
  { name: "Woman’s Fashion", subCategories: [] },
  { name: "Men’s Fashion", subCategories: [] },
  { name: "Electronics", subCategories: [] },
  { name: "Home & Lifestyle", subCategories: [] },
  { name: "Medicine", subCategories: [] },
  { name: "Sports & Outdoor", subCategories: [] },
  { name: "Baby's & Toys", subCategories: [] },
  { name: "Groceries & Pets", subCategories: [] },
  { name: "Health & Beauty", subCategories: [] }
];
slides = [
  {
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    image: "WhatsApp Image 2025-02-28 at 5.00.24 PM.jpeg",
    link: "#"
  },
  {
    title: "Gaming Accessories",
    description: "Save up to 30%",
    image: "WhatsApp Image 2025-02-28 at 5.00.24 PM.jpeg",
    link: "#"
  },
  {
    title: "Smart Home Devices",
    description: "Best Deals Today",
    image: "WhatsApp Image 2025-02-28 at 5.00.24 PM.jpeg",
    link: "#"
  }
];

currentSlideIndex = 0;

constructor() {
  setInterval(() => {
    this.nextSlide();
  }, 5000);
}
nextSlide() {
  this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
}
goToSlide(index: number) {
  this.currentSlideIndex = index;
}
}
