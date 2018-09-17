import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  updateItemForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isFieldValid(field: string) {
    return !this.updateItemForm.get(field).valid && this.updateItemForm.get(field).touched;
  }
}
