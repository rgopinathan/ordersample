import { Injectable } from '@angular/core';
import { order } from './order';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class OrderService {

    constructor(private httpClient: HttpClient) { }

    getOrder(id: string){
        return this.httpClient.get<order>('/api/orders/'+id).pipe(
            (order) => {
                return order;
            }
        )
    }

    getOrders(){
        return this.httpClient.get<order[]>('/api/orders')
            .pipe((orders) => orders);
    }

    addOrder(order: order) {
        const body = JSON.stringify(order);
        console.log(body);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post('/api/orders',body,{headers:headers});
    }

    addOrderItem(orderItem: order){
        const body = JSON.stringify(order);
        console.log(body);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post('/api/orders',body,{headers:headers});
    }
}