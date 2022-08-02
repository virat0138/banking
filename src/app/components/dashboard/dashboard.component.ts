import { GlobalConstants } from 'src/app/model/globa-constants';
import { UserloginComponent } from './../userlogin/userlogin.component';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  
  public global:GlobalConstants=new GlobalConstants();

  login=true;

  dashBoardDetails:any;

  constructor(private bankingService:BankingService) { 
    this.bankingService.getAccountByAccountId(this.global.getGlobalVar()).subscribe(data=>this.dashBoardDetails=data);
   
  }
  ngOnInit(): void {

    console.log(this.global.getGlobalVar());
  }

}
