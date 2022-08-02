import { Router } from '@angular/router';
import { Account } from './../../model/account.model';
import { Component, OnInit } from '@angular/core';
import { BeneficiaryRegister } from 'src/app/model/beneficiaryRegister.model';
import { GlobalConstants } from 'src/app/model/globa-constants';
import { BankingService } from 'src/app/service/banking.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-beneficiary',
  templateUrl: './add-new-beneficiary.component.html',
  styleUrls: ['./add-new-beneficiary.component.css']
})
export class AddNewBeneficiaryComponent implements OnInit {

  account:Account=new Account();

  bRegister:BeneficiaryRegister =new BeneficiaryRegister();
  constructor(private bankingService:BankingService,private global:GlobalConstants,private router:Router,private location:Location) { }

  ngOnInit(): void {
  }

  BeneficiaryRegister(){
    console.log(this.bRegister);
    this.account.accountId=this.global.getGlobalVar();
    this.bRegister.account=this.account;
    this.bankingService.beneficiaryAccount(this.bRegister).subscribe(data => {
      alert("Beneficiary Added Successfully");
      this.location.back();
    });

  }

}
