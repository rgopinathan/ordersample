import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { order } from '../order';
import { orderItem } from '../orderItem';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService} from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  DetailForm : FormGroup;
  successMessage: string = '';
  order: order;
  orders: order[];
  orderItems: orderItem[];
  orderId: string;
  selectedOrder: order;
  editEnabled: boolean = false;
  
  constructor(private service: OrderService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.DetailForm = new FormGroup({
      'RSSNumber': new FormControl(null,Validators.required),
      'OrderNumber': new FormControl(null,Validators.required),
      'Packer': new FormControl(null,Validators.required),
      'Buyer': new FormControl(null,Validators.required),
      'Type': new FormControl(null),
      'PackDate': new FormControl(null),
      'DeliveryDate': new FormControl(null)    
    });

    this.orderId = this.route.snapshot.params['id'];

    if(this.orderId != null) {
      this.getOrder();
    } else {
      this.editEnabled = true;
    }
  }
  
  getOrder() {
    this.service.getOrder(this.orderId).subscribe(
      (order:order)=> {
        this.order=order;
        this.DetailForm.setValue({
        RSSNumber: order.RSSNumber,
        OrderNumber: order.OrderNumber,
        Packer:order.Packer,
        Buyer:order.Buyer,
        Type:order.Type,
        PackDate: this.fromJsonDate(order.PackDate),
        DeliveryDate: this.fromJsonDate(order.DeliveryDate)
      });
    });
  }

  saveOrder(){
    console.log(this.DetailForm.value);
    this.successMessage = '';
    this.service.addOrder(this.DetailForm.value).subscribe(
      (result)=>  {
        this.successMessage = 'Order added';
        console.log(result);
        this.orderId = result["_id"];
        this.editEnabled = false;
      }
    );
  }
  

  isFieldValid(field: string) {
    return !this.DetailForm.get(field).valid && this.DetailForm.get(field).touched;
  }

  addItem(){

  }

  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toISOString().substring(0, 10);  //Ignore time
  }
  
}
