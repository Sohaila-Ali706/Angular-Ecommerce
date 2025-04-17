import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-single-category',
  standalone: false,
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent {
  isLoading = true
  filteredproducts:any =[]
  constructor(private router: Router, private activate: ActivatedRoute, private global:GlobalService) {}

  ngOnInit(){
    this.activate.params.subscribe(param=>{
      console.log(param['catName'])
      this.global.getPosts().subscribe(res=>{
        console.log(res)
        let products = res.products
        console.log(products.filter((item:any) => item.category == param['catName']))
        this.filteredproducts = products.filter((item:any) => item.category == param['catName'] || item.title == param['catName'] || item.cardTitle == param['catName'])
      })


    })
    // تحكم في الـ setTimeout (لوجيك الـ loading)
    setTimeout(() => {
      this.isLoading = false; 
    }, 800);  // بعد ثانية واحدة، اختفاء الـ loading

  }
  
}
