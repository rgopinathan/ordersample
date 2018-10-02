import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  updateItemForm: FormGroup;

  constructor() { }

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

  updateItem()
  {
    console.log(this.updateItemForm.value);
  }
  
  isFieldValid(field: string) {
    return !this.updateItemForm.get(field).valid && this.updateItemForm.get(field).touched;
  }
}
