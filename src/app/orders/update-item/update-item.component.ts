import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService} from '../order.service';
import { order } from '../order';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  @Input() orderId: string;
  updateItemForm: FormGroup;
  orders: order[];
  order: order[];
  orderItem: string;
  constructor(private service: OrderService) { }

  ngOnInit() {
    this.updateItemForm = new FormGroup({
      'grade': new FormControl(null,Validators.required),
      'sellingQuantity': new FormControl(null,Validators.required),
      'sellingPrice': new FormControl(null,Validators.required),
      'buyingQuantity': new FormControl(null,Validators.required),
      'buyingPrice': new FormControl(null,Validators.required),
      'sellingCartons': new FormControl(null,Validators.required),
      'buyingCartons': new FormControl(null,Validators.required)
  });
  }

  updateItem() {
    console.log(this.updateItemForm.value);
    var orderItem = this.updateItemForm.value;
    orderItem.orderId = this.orderId;
    // this.service.getOrderId(orderItem.orderId);
    this.service.addOrderItem(orderItem)
    .subscribe((orderItem) => 
    {
        this.orderItem = orderItem;
    });
 }
  
  isFieldValid(field: string) {
    return !this.updateItemForm.get(field).valid && this.updateItemForm.get(field).touched;
  }
}
