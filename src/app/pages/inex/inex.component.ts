import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-inex',
  standalone: false,
  templateUrl: './inex.component.html',
  styleUrl: './inex.component.css'
})
export class InexComponent {
  

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
