import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { AddNewBeneficiaryComponent } from './components/add-new-beneficiary/add-new-beneficiary.component';
import { RtgsPaymentComponent } from './components/rtgs-payment/rtgs-payment.component';
import { NeftPaymentComponent } from './components/neft-payment/neft-payment.component';
import { ImpsPaymentComponent } from './components/imps-payment/imps-payment.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    OpenAccountComponent,
    DashboardComponent,
    AccountStatementComponent,
    SetNewPasswordComponent,
    AddNewBeneficiaryComponent,
    RtgsPaymentComponent,
    NeftPaymentComponent,
    ImpsPaymentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
