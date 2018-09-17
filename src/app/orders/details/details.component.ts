import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  DetailForm : FormGroup;

  constructor() { }

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
  }

  saveOrder(){
    console.log(this.DetailForm.value);
  }

  isFieldValid(field: string) {
    return !this.DetailForm.get(field).valid && this.DetailForm.get(field).touched;
  }
  
}
