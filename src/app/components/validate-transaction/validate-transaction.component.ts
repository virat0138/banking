import { UserloginComponent } from './../userlogin/userlogin.component';
import { ValidTransaction } from './../../model/validTransaction.model';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/model/globa-constants';

@Component({
  selector: 'app-validate-transaction',
  templateUrl: './validate-transaction.component.html',
  styleUrls: ['./validate-transaction.component.css']
})
export class ValidateTransactionComponent implements OnInit {


  
  result:any;

  validTransaction:ValidTransaction=new ValidTransaction();

  constructor(private bankingService:BankingService,public global:GlobalConstants) { 
    this.validTransaction.accountId=this.accountId;
  }

  accountId=this.global.getGlobalVar();

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.validTransaction);
    console.log("submit");

    this.bankingService.validateTransaction(this.validTransaction).subscribe(data=>{
      console.log(data);
      if(Object.keys(data).map(key => data[key]==='True')){
        
      }

    });

  }

}
