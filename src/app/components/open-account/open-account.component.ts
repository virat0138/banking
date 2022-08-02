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
  


  constructor(private bankingService:BankingService) { }

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
    this.bankingService.account(this.openAccount).subscribe(data=>alert(Object(data)["status"])
    );
  }
  // public saveUsername: boolean;

  // public onSaveUsernameChanged(value: boolean) {
  //   this.saveUsername = value;
  // }
  // openAccountForm = new FormGroup({
  //   firstName: new FormControl('',Validators.required)
  // })

  
  


}
