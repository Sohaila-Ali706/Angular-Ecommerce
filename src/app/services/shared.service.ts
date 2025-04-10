import { Injectable } from '@angular/core';
import { GlobalService } from '../services/global.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  private selectedCategory: string = "";
  private searchTerm: string = '';
  setSearchTerm(term: string) {
  this.searchTerm = term.toLowerCase();
  console.log('searchTerm set to:', this.searchTerm);
}

getSearchTerm(): string {
  return this.searchTerm;
}                                            


  setCategory(category: string) {
    this.selectedCategory = category;
  }

  getCategory(): string {
    return this.selectedCategory;
  }                               

  constructor( private global: GlobalService) { }
 
}
