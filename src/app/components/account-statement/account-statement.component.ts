import { GlobalConstants } from './../../model/globa-constants';
import { UserloginComponent } from './../userlogin/userlogin.component';
import { ApiResponse } from './../../model/api.response';
import { Observable } from 'rxjs';
import { BankingService } from './../../service/banking.service';
import { FilterTransaction } from './../../model/filterTransaction.module';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction.model';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  filterTransaction: FilterTransaction=new FilterTransaction();

  transactions!: Observable<Transaction[]>;

  login=true;

  beforeSubmit=false;
  afterSubmit=true;

  accountStatement:any;
  // accountId=UserloginComponent.globalAccountNumber;



  constructor(private bankingService:BankingService,public global:GlobalConstants) {
    this.filterTransaction.accountId=this.global.getGlobalVar();
    this.bankingService.getAccountByAccountId(this.global.getGlobalVar()).subscribe(data=>this.accountStatement=data);
   }


  ngOnInit(): void {

  }

  onSubmit(){
    
    this.transactions=this.bankingService.getFilteredTransactions(this.filterTransaction);

    this.beforeSubmit=true;
    this.afterSubmit=false;
    console.log("Hi");
    console.log(this.transactions);
    console.log(this.filterTransaction.startDate)
  }

}
