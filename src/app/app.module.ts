import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainFooterComponent } from './Shared/component/main-footer/main-footer.component';
import { MainHeaderComponent } from './Shared/component/main-header/main-header.component';

import { MainSectionComponent } from './Shared/component/main-section/main-section.component';

import { MainSliderComponent } from './Shared/component/main-slider/main-slider.component';
import { routes } from './Shared/Config/router.config';
import { RouterModule } from '@angular/router';
import { ProductService } from './Shared/services/products.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AffichShopComponent } from './Shared/Component/affich-shop/affich-shop.component';

import { ProductsModule } from './products/products.module';
import { MainOffersComponent } from './Shared/component/main-offers/main-offers.component';
import { AddProductComponent } from './Shared/Component/add-product/add-product.component';
import { RegisterComponent } from './Shared/Component/register/register.component';
import { LoginComponent } from './Shared/Component/login/login.component';
import { ContactComponent } from './Shared/Component/contact/contact.component';







@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    AddProductComponent,
    
    MainHeaderComponent,
    MainSectionComponent,
    MainSliderComponent,
    MainOffersComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    AffichShopComponent
 
    
    
  
 
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ProductsModule

  
  
   
   
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
