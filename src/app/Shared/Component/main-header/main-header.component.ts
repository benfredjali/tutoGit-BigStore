import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../../services/products.service';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  user: Observable<firebase.User>;
  private isLoggedIn: Boolean= false;
  private email: String;


  constructor( public afAuth: AngularFireAuth, private router: Router, private productsService: ProductService ) {
    
 let status = localStorage.getItem('isLoggedIn')
 console.log(status)

 if (status === 'true'){
 this.isLoggedIn = true;
  }else {
    this.isLoggedIn = false;
  }


    //firebase.auth().onAuthStateChanged(function(user) {
     // if (user) {
        //** */ User is signed in.**
     //   this.isLoggedIn= true;
    //  } else {
        //** */ No user is signed in.**
       // this.isLoggedIn= false;
       // this.router.navigate(['login'])
      //}
    //});



  }



  private cartCounter: number= 0;
  private allproducts: any;
  private cartproducts: any=[];

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

  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn', 'false')
    this.router.navigate(['/login'])
  }

}
