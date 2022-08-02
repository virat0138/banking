import { GlobalConstants } from 'src/app/model/globa-constants';
import { UserloginComponent } from './../userlogin/userlogin.component';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  // accountId:number=UserloginComponent.globalAccountNumber;

  accountSummary:any;

  constructor(private bankingService:BankingService,public global:GlobalConstants){ 
    this.bankingService.getAccountByAccountId(this.global.getGlobalVar()).subscribe(data=>this.accountSummary=data);
  }

  ngOnInit(): void {
  }

}
