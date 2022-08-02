import { UserloginComponent } from './../userlogin/userlogin.component';
import { Account } from './../../model/account.model';
import { ApiResponse } from './../../model/api.response';
import { Observable } from 'rxjs';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/model/globa-constants';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  

  userDetails:any;

  constructor(private bankingService:BankingService,public gloabal:GlobalConstants ) {
   this.bankingService.getAccountByAccountId(this.gloabal.getGlobalVar()).subscribe(data=>this.userDetails=data);
  }

  // accountId:number=this.gloabal.getGlobalVar();

  ngOnInit(): void {
  }



}
