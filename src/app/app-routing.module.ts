import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ListComponent } from './orders/list/list.component';
import { DetailsComponent } from './orders/details/details.component';

var ordersRoute = [
  { path: '', component: ListComponent},
  { path: 'add', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: ordersRoute
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
