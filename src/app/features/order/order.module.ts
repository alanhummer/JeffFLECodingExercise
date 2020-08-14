import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';

import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
