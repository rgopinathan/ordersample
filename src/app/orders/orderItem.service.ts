import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { order } from './order';
import 'rxjs/add/operator/map';

@Injectable()

export class OrderItemService {

    constructor(private http: Http) { }

    getOrderId(id) {
        return this.http.get('/api/orders/'+id).map(res=>res.json())
     }

    // addOrderItem(orderItem: order)    {
    //     const body = JSON.stringify(order);
    //     console.log(body);
    //     const headers = new Headers({'Content-Type':'application/json'});
    //     return this.http.post('/api/orders',body,{headers:headers}).map(res=>res.json());
    // }
}