import { Component, OnInit, Input } from '@angular/core';
import { orderItem } from '../orderItem';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() items: orderItem[];

  constructor() { }

  ngOnInit() {
  }
}
