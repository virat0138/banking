import { GlobalConstants } from './../../model/globa-constants';
import { UserloginComponent } from './../userlogin/userlogin.component';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  // accountId:number=UserloginComponent.globalAccountNumber;

  login=true;

  accountDetails:any;


  constructor(private bankingService:BankingService,public global:GlobalConstants) {
    this.bankingService.getAccountByAccountId(this.global.getGlobalVar()).subscribe(data=>this.accountDetails=data);
   }

  ngOnInit(): void {
  }

}
