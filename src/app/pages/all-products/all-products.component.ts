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
        this.applyFilter(); 
      });
    
      setTimeout(() => {
        this.applyFilter();
      }, 100);
    }
    
    applyFilter() {
      const search = this.sharedService.getSearchTerm()?.toLowerCase();
      const category = this.sharedService.getCategory();
    
      this.filteredProducts = this.products.filter((p) => {
        const matchesSearch = search ? p.title.toLowerCase().includes(search) : true;
        const matchesCategory = category ? p.category === category : true;
        return matchesSearch && matchesCategory;
      });
    
      console.log("Filtered Products:", this.filteredProducts);
    }                
}                                      
