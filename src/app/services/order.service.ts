import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order} from 'src/app/interfaces/order.interface';
import { Item } from '../classes/item.class';

@Injectable()
export class OrderService {

  private url: string = "api/orders/";
  private urlItems: string = "api/items/";

  constructor(
    private http: HttpClient
  ) {}

  public getOrderList() {
    return this.http.get<Order[]>(this.url);
  }

  public getOrderDetail(id: string) {
    return this.http.get<Order>(this.url + id);
  }

  public getItemList(){
    return this.http.get<Item[]>(this.urlItems);
  }

  public createOrder(order: Order) {
    return this.http.post<Order>(this.url, order);
  }
}
