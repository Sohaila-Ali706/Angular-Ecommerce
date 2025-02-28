import { Component } from '@angular/core';

@Component({
  selector: 'app-cardtwo',
  standalone: false,
  templateUrl: './cardtwo.component.html',
  styleUrl: './cardtwo.component.css'
})
export class CardtwoComponent {

  category =[
    { i :"fa-solid fa-mobile-screen " , title:"phone" },
    { i :"fa-solid fa-desktop " , title:"Computers" },
    { i :"fa-regular fa-clock " , title:"SmartWatch" },
    { i :"fa-solid fa-camera " , title:"Camera" },
    { i :"fa-solid fa-headphones " , title:"HeadPhones" },
    { i :"fa-solid fa-gamepad " , title:"Gaming" },
  ]

}
