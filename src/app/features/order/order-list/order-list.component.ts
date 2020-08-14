import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/classes/order.class';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public orders: Order[];
  public id: number;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.orderService.getOrderList()
      .subscribe(data => {
        this.orders = data;
      }, error => {
        console.error(error);
      });
  }

  public highlightRow(order) {
    this.id = order.id;
  }

  public navigateToDetail(id: string) {
    this.router.navigate([ 'detail', id ], {
      relativeTo: this.route.parent
    });
  }
}
