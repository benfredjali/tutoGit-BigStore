import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  

  constructor(private productsService:ProductService ) { }

    private cartCounter: number=0;
    private allproducts: any;
    private cartproducts: any=[];
    private ls:any;
  

  ngOnInit() {
    this.productsService.getProducts().subscribe( res =>{
      this.allproducts= res
  
    const products= JSON.parse(localStorage.getItem('products'));
    this.cartCounter = products.length;
    products.forEach(prodId =>{
   
  const product=  this.allproducts.filter(p => p.id == prodId)[0];
  console.log(product);
  this.cartproducts.push(product);
     
  })

});
  }

 
}

