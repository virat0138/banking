import { Router } from '@angular/router';
import { Customer } from './../../model/customer.model';
import { Account } from './../../model/account.model';
import { OpenAccount } from './../../model/openAccount.model';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  account:Account=new Account();
  customer:Customer=new Customer();

  openAccount: OpenAccount = new OpenAccount();
  address1: string;
  address2: string;
  landmark: string;
  state: string;
  city: string;
  pincode: string;
  paddress1: string;
  paddress2: string;
  plandmark: string;
  pstate: string;
  pcity: string;
  ppincode: string;
  


  constructor(private bankingService:BankingService,private router:Router) { }

  ngOnInit(): void {
      }
  permanentsame(event) {
    console.log(event.target.checked);
    if (event.target.checked = 'true') {
      document.getElementById("paddress1")[0].value = document.getElementById("address1")[0].value;
    }
  }
  checkCheckBoxvalue1(event) {
    console.log(event.target.checked);
    if (event.target.checked = 'true')
      this.openAccount.debitCard = 1;
    else
      this.openAccount.debitCard = 0;
  }
  checkCheckBoxvalue2(event) {
    console.log(event.target.checked)
    if (event.target.checked = 'true')
      this.openAccount.netBanking = 1;
    else
      this.openAccount.netBanking = 0;
  }

  

  openAccountcus() {
    this.openAccount.residentialAddress = this.address1 + "  " + this.address2 + " " + this.landmark + " " + " " + this.city + " " + " " + this.state + this.pincode;
    this.openAccount.permanentAddress = this.paddress1 + "  " + this.paddress2 + " " + this.plandmark + " " + " " + this.pcity + " " + " " + this.pstate + this.ppincode;
    console.log(this.openAccount.residentialAddress);
    console.log(this.openAccount);
    this.bankingService.account(this.openAccount).subscribe(data=>{
       alert(Object(data)['status']);
       console.log(Object(data)['customerId']);
       if(Object(data)['customerId']!=null){
        console.log("inside c")
        this.account.balanceAmount=0;
        this.account.isApproved=1;
        this.customer.customerId=Object(data)['customerId'];
        this.account.customer=this.customer;

        console.log("api ke upar")
        console.log(this.account)
        this.bankingService.createAccountByCustomerId(this.account).subscribe(data=>{
          alert(Object(data)['Message']);
        });

        this.router.navigate(['/login']);


        


       }


    });
  }
  // public saveUsername: boolean;

  // public onSaveUsernameChanged(value: boolean) {
  //   this.saveUsername = value;
  // }
  // openAccountForm = new FormGroup({
  //   firstName: new FormControl('',Validators.required)
  // })

  
  


}
