import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { Key } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affich-shop',
  templateUrl: './affich-shop.component.html',
  styleUrls: ['./affich-shop.component.css']
})
export class AffichShopComponent implements OnInit {

  itemList: AngularFireList<any>

  itemArray=[]

  data = {

    name : '',
    quantite : '',
    prix : ''
    
  
  }


  constructor(public db:AngularFireDatabase  , public router:Router) {
    
    this.itemList = db.list('products')

    this.itemList.snapshotChanges()
    .subscribe(actions=>{

        actions.forEach(action=>{
        let y = action.payload.toJSON()
        y["$key"]= action.key
        this.itemArray.push(y as ListItemClass)

        })

    })

    console.log(this.itemArray)
   }

  
  ngOnInit() {
  }

  editForm($key){

    for (let value of this.itemArray ) {
    if (value['$key'] == $key) {
      console.log(value['$key'])  

      this.data.name = value['name'];
      this.data.quantite = value['quantite'];
      this.data.prix = value['prix'];
      
    }
    
      
    }
  }


  onEdit( $key){

    this.data.name 
    this.data.quantite 
    this.data.prix  

      this.itemList.set($key, {
      
        name : this.data.name,
        quantite :  this.data.quantite,
        prix :  this.data.prix
      })
      this.itemArray=[]
     
        }



  onDelete($key){
   this.itemList.remove($key);
   this.itemArray = []
  }
}

export class ListItemClass {
     
    $key: String;
    name :String;
    quantite :String;
    prix :String;

}
