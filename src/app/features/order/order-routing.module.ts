import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderAddComponent } from './order-add/order-add.component';

const orderRoutes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'list',
        component: OrderListComponent
      },
      {
        path: 'detail/:id',
        component: OrderDetailComponent,
      },
      {
        path: 'add',
        component: OrderAddComponent
      },
      {
        path: '',
        component: OrderListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule { }
