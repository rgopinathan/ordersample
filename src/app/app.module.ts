import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
import { OrderItemService} from './orders/orderItem.service';
import { Http, Headers,HttpModule} from '@angular/http';

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
    HttpModule
     ],
  providers: [OrderService, 
              HttpModule,
              OrderItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

