import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class ProductService {

    private products: Array<Product>;
    constructor(){ }
    
    getProducts(): any{
        this.products=[{
             id : 1,
            name : "Fruits",
            description : "Fruits with a good price",
            image : "assets/images/of4.png",
            price : 150,
            category : "Shopping",
            favorite : false,
           }, {
            id : 2,
            name : "Tea and coffe",
            description : "Fruits with a good price",
            image : "assets/images/of1.png",
            price : 350,
            category : "Shopping",
            favorite : false,

            }, {
                id : 3,
                name : "Vegetabe",
                description : "Fruits with a good price",
                image : "assets/images/of5.png",
                price : 200,
                category : "Shopping",
                favorite : false,
    
                }, {
                    id : 4,
                    name : "Tea",
                    description : "Fruits with a good price",
                    image : "assets/images/of2.png",
                    price : 80,
                    category : "Shopping",
                    favorite : false,
        
                    }, {
                        id : 5,
                        name : "Jus",
                        description : "Fruits with a good price",
                        image : "assets/images/of3.png",
                        price : 60,
                        category : "Shopping",
                        favorite : false,
            
                        }, {
                            id : 6,
                            name : "Coffe",
                            description : "Fruits with a good price",
                            image : "assets/images/of6.png",
                            price : 45,
                            category : "Shopping",
                            favorite : false,
                
                            }
        ]
        const productsObservable = new Observable( observer=>{
            setTimeout( () => {
                observer.next(this.products);
            },1000);
           
        });
        return productsObservable;
    }
    canActivate(): boolean {

        const card = localStorage.getItem('products');
        alert('card');
        console.log((card !==null ));
        return (card != undefined);
    }
}