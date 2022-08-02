import { GlobalConstants } from './../../model/globa-constants';
import { BankingService } from './../../service/banking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { Registration } from 'src/app/model/registration.model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user : User = new User();
  register : Registration = new Registration();
  msg='';
  logedin = false;
  loginForm: FormGroup | any;

  constructor(private bankingService:BankingService, private _route : Router,public global:GlobalConstants) {

    this.loginForm = new FormGroup({
      accountNumber: new FormControl('', [Validators.required,Validators.pattern(
        '[0-9]{9,18}',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });

   }

  ngOnInit(): void {
  }

  userlogin(){
    console.log(this.user);
    this.bankingService.loginuser(this.user).subscribe(data => {
      console.log(data);
      if(Object(data)["status"]=='True'){  
        this.logedin = true;
        this.global.setGlobalVar(this.user.accountNumber);
        console.log(this.global.getGlobalVar());
        this._route.navigate(['/dashboard']);
      }else{
        alert("Username or Password Incorrect")
      }
    
    }
     
      // this.msg="Please enter correct Credentials";
    );
  }

  userRegister(){
    console.log(this.register);

    this.bankingService.registeruser(this.register).subscribe(data => {
      alert("Successfully")
    }
      ,error=> alert("User not registered"));

  }

}

