import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data = {

    email : '',
    name : '',
    message : ''
    
  
  }

  
  itemList: AngularFireList<any>

  constructor(public db:AngularFireDatabase , public router:Router ) { 

    this.itemList = db.list('Messages')

  }

  ngOnInit() {
console.log(this.data.name);


  }

  ajoutDoc(){
    this.itemList.push({

    email : this.data.email,
    name :  this.data.name,
    message :  this.data.message
  

    })
this.router.navigate (['/home'])

  }

}
