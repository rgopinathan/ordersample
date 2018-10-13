import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { ListComponent } from './orders/list/list.component';
import { DetailsComponent } from './orders/details/details.component';
import { HeaderComponent } from './header/header.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { DisplayValidationDirective } from './display-validation.directive';
import { UpdateItemComponent } from './orders/update-item/update-item.component';
import { ItemDetailsComponent } from './orders/item-details/item-details.component';
import { OrderService} from './orders/order.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ListComponent,
    DetailsComponent,
    HeaderComponent,
    FieldErrorDisplayComponent,
    DisplayValidationDirective,
    UpdateItemComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
     ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

