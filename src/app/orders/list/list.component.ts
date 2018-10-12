import { Component, OnInit } from '@angular/core';
import { order } from '../order';
import { OrderService} from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  order: order;
  orders: order[];
  selectedOrder: order;

  constructor(private service: OrderService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.service.getOrders()
    .subscribe((orders) => 
    {
        this.orders = orders;
    });
  }
}
