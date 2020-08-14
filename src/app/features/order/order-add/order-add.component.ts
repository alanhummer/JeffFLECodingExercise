import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/classes/item.class';
import { Order } from 'src/app/classes/order.class';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  customerName = "le Customer";
  orderForm: FormGroup;
  displayConfirm: boolean;
  saleItems: Item[] = [];
  isValid = false;

  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.createOrderForm();

    this.orderService.getItemList()
      .subscribe(data => {
        this.saleItems = data;
        this.resetSalesItems();
      }, error => {
        console.error(error);
      });


      /* 
        poor man's quick and dirty validation only works intially
        there are way better ways to do this once we learn the rules
      */
    this.orderForm.valueChanges.subscribe((data) => {
      this.isValid = this.orderForm.dirty;
    });
  }

  createOrderForm(){
    this.displayConfirm = false;
    this.orderForm = new FormGroup({});
  }

  resetOrderForm() {
    this.displayConfirm = false;
    this.orderForm = new FormGroup({});
    this.resetSalesItems();
  }

  resetSalesItems(){
    this.saleItems.map(item => {
      this.orderForm.addControl(item.id , new FormControl(''))
    });
  }

  orderIt() {

    let orderedItems = [];
    let orderTotal = 0;

    /* 
      For now, we do this way (assume quantiy of 1).  Because the model doesn't seem to address quantity
      but it should.  We would need to open an issue for this.
    */
    this.saleItems.map((item) =>{
      if(this.orderForm.controls[item.id].value !==""){
        orderedItems.push(item.id)
        orderTotal = orderTotal + Number.parseInt(item.price);
      }
    })
    
    let order = {
      id: null,
      timestamp: this.createOrderDate(),
      total: orderTotal.toString(),
      customer: this.customerName,
      items: orderedItems,
    };

    this.orderService.createOrder(order)
      .pipe()
      .subscribe((data) => {
        this.displayConfirm  = true;
      });
  }

  createOrderDate(): string {

    // normally we would use something like 'moment' for this.
    const today = new Date();
    let mm = (today.getMonth() + 1).toString();
    mm = mm.length === 1 ? '0' + mm : mm;

    let dd = today.getDate().toString();
    dd = dd.length === 1 ? '0' + dd : dd;

    return `${today.getFullYear()}-${mm}-${dd}`;
  }
}
