import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  data = {

    name : '',
    quantite : '',
    prix : ''
    
  
  }

  
  itemList: AngularFireList<any>

  constructor(public db:AngularFireDatabase , public router:Router ) { 

    this.itemList = db.list('products')

  }

  ngOnInit() {
console.log(this.data.name);


  }

  ajoutDoc(){
    this.itemList.push({

    name : this.data.name,
    quantite :  this.data.quantite,
    prix :  this.data.prix
  

    })
this.router.navigate (['/shop'])

  }

}
