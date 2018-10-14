import { Injectable } from '@angular/core';
import { order } from './order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { orderItem } from './orderItem';

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
        return this.httpClient.post<string>('/api/orders',body,{headers:headers}).pipe((orderId) => orderId);
    }

    addOrderItem(orderItem: order){
        const body = JSON.stringify(orderItem);
        console.log(body);
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post('/api/orderItems',body,{headers:headers});
    }

    getOrderItems(orderId: string){
        return this.httpClient.get<orderItem[]>('/api/orderItems/'+ orderId).pipe(
            (orderItems) => orderItems
        );
    }
}