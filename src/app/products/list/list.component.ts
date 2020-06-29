import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/services/products.service';
import { Product } from 'src/app/Shared/models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private products ;
  private total = 0;
  private product :Product;
  
    constructor(private productsService: ProductService) { }
  
  
    ngOnInit() {
      this.productsService.getProducts().subscribe( res =>{
        this.products= res;
      });
    }
    clickToCount(e){
      console.log(e);
      this.total=this.total+e;
    }
    onSelectProduct(e){this.product=e;
      console.log(this.product.name);
  
    }
  }
  