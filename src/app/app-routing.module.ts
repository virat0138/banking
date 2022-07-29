import { RtgsPaymentComponent } from './components/rtgs-payment/rtgs-payment.component';
import { ImpsPaymentComponent } from './components/imps-payment/imps-payment.component';
import { NeftPaymentComponent } from './components/neft-payment/neft-payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'accountStatement',component:AccountStatementComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'neftTransfer',component:NeftPaymentComponent},
  {path:'impsTransfer',component:ImpsPaymentComponent},
  {path:'rtgsTransfer',component:RtgsPaymentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
