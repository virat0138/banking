import { GlobalConstants } from 'src/app/model/globa-constants';
import { UserloginComponent } from './../userlogin/userlogin.component';
import { ValidTransaction } from './../../model/validTransaction.model';
import { Account } from './../../model/account.model';
import { Transaction } from 'src/app/model/transaction.model';
import { Observable } from 'rxjs';
import { Beneficiary } from './../../model/beneficiary.model';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rtgs-payment',
  templateUrl: './rtgs-payment.component.html',
  styleUrls: ['./rtgs-payment.component.css']
})
export class RtgsPaymentComponent implements OnInit {

 transaction:Transaction=new Transaction();
 account:Account=new Account();
 beneficiary:Beneficiary=new Beneficiary();

 login=true;

 rtgsForm=false;
 validation=true;

 transactionResult:Observable<Transaction>;

 accountId:Number;
 beneficiaryId:number;  
 
 result:any;

 validTransaction:ValidTransaction=new ValidTransaction();
  

  beneficiaryDetails!: Beneficiary[];

  constructor(private bankingService:BankingService, private route:Router,public global:GlobalConstants) { 
    this.bankingService.getBeneficiaryByAccount(this.accountNo).subscribe(data=>this.beneficiaryDetails=data);
   
  }

  accountNo=this.global.getGlobalVar();

  ngOnInit(): void {
  }

  reset(){
   
  }

  onSubmit(){
  
    this.account.accountId=this.accountId;
    this.beneficiary.beneficiaryId=this.beneficiaryId;

    this.transaction.account=this.account;
    this.transaction.beneficiary=this.beneficiary;
    this.transaction.transactionMode="Withdrawl";
    this.transaction.transactionType="RTGS";

      console.log(this.account);
      console.log(this.beneficiary);
      console.log(this.transaction);

      // this.bankingService.saveTransaction(this.transaction).subscribe(data=>console.log(data));

      // console.log(this.transactionResult);
  }

  validateTransaction(){
    
    if(this.transaction.amount==null ||  this.transaction.account==null || this.transaction.beneficiary==null ){
      alert("Please save or enter details ")
    }else{
      this.rtgsForm=true;
      this.validation=false; 
    }

  }

  onTransactionSubmit(){
    this.validTransaction.accountId=this.accountId;
    console.log(this.validTransaction);
    console.log("submit");
    this.bankingService.validateTransaction(this.validTransaction).subscribe(data=>{
      console.log(data);
      console.log(Object(data)["status"]);
       
      if(Object(data)["status"]=='True'){
        console.log("Success");
        this.bankingService.saveTransaction(this.transaction).subscribe(data=>console.log(data));
        alert("Transaction Successfull")
        this.route.navigate(["/dashboard"]);
      }else{
        alert("Enter correct Password");
      }


      // console.log(Object.keys(data).map(key => data[key]));
      // if(Object.keys(data).map(key => data[key]=='True')){
      //    console.log("chal gya");
      //    console.log(this.transaction);
      //    this.bankingService.saveTransaction(this.transaction).subscribe(data=>console.log(data));
      // }
      // else{
      //   alert("Please Enter the Correct Password");
      // }
    });

  }

  transactionRevert(){
    this.rtgsForm=false;
    this.validation=true;
  }

}
