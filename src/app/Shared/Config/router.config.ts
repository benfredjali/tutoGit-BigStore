import { Routes }from '@angular/router';



import { MainFooterComponent } from '../component/main-footer/main-footer.component';

import { MainSectionComponent } from '../component/main-section/main-section.component';
import { ListComponent } from 'src/app/products/list/list.component';
import { ItemComponent } from 'src/app/products/item/item.component';
import { AddProductComponent } from '../Component/add-product/add-product.component';
import { RegisterComponent } from '../Component/register/register.component';
import { LoginComponent } from '../Component/login/login.component';
import { ContactComponent } from '../Component/contact/contact.component';
import { AffichShopComponent } from '../Component/affich-shop/affich-shop.component';
import { CardComponent } from 'src/app/products/card/card.component';

export const routes: Routes=

[

{ path: 'footer', component: MainFooterComponent, },

{ path: 'home', component: MainSectionComponent, },

{ path: 'home/list', component: ListComponent, },

{ path: 'home/item', component: ItemComponent, },

{ path: 'product', component: AddProductComponent, },

{ path: 'shop', component: AffichShopComponent, },
{ path: 'register', component: RegisterComponent},

{ path: 'login', component: LoginComponent},

{ path: 'contact', component: ContactComponent},

{ path: 'home/card', component: CardComponent},





];