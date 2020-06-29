import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Shared/models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() p: Product;
  @Output() onClickCount = new EventEmitter();
  @Output() onSelectProduct = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addToCard(){
    const products =JSON.parse(localStorage.getItem('products'));
    if(products === null){
      localStorage.setItem('products', JSON.stringify( [this.p.id]));

    }else{
      products.push(this.p.id);
      localStorage.setItem('products', JSON.stringify(products));

      window.location.reload();

    }
  }
    clickToCount(){
this.onClickCount.emit(1);
this.onSelectProduct.emit(this.p);
window.location.reload();
    }
  

}
