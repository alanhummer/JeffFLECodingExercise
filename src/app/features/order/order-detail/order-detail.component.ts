import { Component,
         OnInit }          from '@angular/core';
import { Router,
         ActivatedRoute, } from '@angular/router';
import { Location }        from '@angular/common';

import { OrderService }    from 'src/app/services/order.service';
import { Order}            from 'src/app/classes/order.class';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(
    private service: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public order: Order;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOrderDetail(id)
      .subscribe(data => {
        this.order = new Order(data.id, data.timestamp, data.total, data.customer, data.items);
        console.info(data);
      }, error => {
        console.error(error);
      } 
      );
  }

  public navigateBack() {
    this.location.back();
  }

}
