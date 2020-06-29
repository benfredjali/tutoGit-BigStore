import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [ListComponent, CardComponent, ItemComponent],
  imports: [
    CommonModule,

  ]
})
export class ProductsModule { }
