import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit{
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private global: GlobalService,
    private sharedService: SharedService, private route: ActivatedRoute) {}
   
  
    ngOnInit() { 
     
    this.global.getPosts().subscribe((res) => {
       this.products = res.products;
       console.log("all products:", res);
     
      });
    
      setTimeout(() => {
       // this.applyFilter();
      }, 100);


      this.route.queryParams.subscribe(params => {
       const categoryFromQuery = params['category'];
        if (categoryFromQuery) {
        }
      // this.applyFilter();
      });      
   }
  }
    
