
import { OpenAccount } from './../model/openAccount.model';
import { ValidTransaction } from './../model/validTransaction.model';
import { Account } from './../model/account.model';
import { FilterTransaction } from './../model/filterTransaction.module';
import { ApiResponse } from './../model/api.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction.model';
import { Beneficiary } from '../model/beneficiary.model';
import { Registration } from '../model/registration.model';
import { User } from '../model/user.model';
import { BeneficiaryRegister } from '../model/beneficiaryRegister.model';


@Injectable({
  providedIn: 'root'
})
export class BankingService {

  constructor(private http:HttpClient) { }
  transactionUrl:string='http://localhost:8085/transaction';
  accountUrl:string='http://localhost:8085/account/';
  beneficiaryUrl:string='http://localhost:8085/beneficiary/';
  transactionValid:string="http://localhost:8085/validateTransaction";
  openAccountUrl:string="http://localhost:8085/customer";
  registerUrl:string="http://localhost:8085/registerUser";
  userUrl:string="http://localhost:8085/login";
  createAccountUrl:string="http://localhost:8085/account";
  beneficiaryRegisterUrl:string="http://localhost:8085/beneficiary";

  getTransactions():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.transactionUrl);
  }

  getFilteredTransactions(filterTransaction:FilterTransaction):Observable<Transaction[]>{
    return this.http.post<Transaction[]>(this.transactionUrl+"Filter",filterTransaction);
  }

  getAccountByAccountId(accountNumber:Number):Observable<Account>{
    return this.http.get<Account>(this.accountUrl+accountNumber);
  }

  getBeneficiaryByAccount(accountNumber:Number):Observable<Beneficiary[]>{
    return this.http.get<Beneficiary[]>(this.beneficiaryUrl+accountNumber);
  }

  saveTransaction(transaction:Transaction):Observable<ApiResponse>{
    console.log(this.transactionUrl);
    return this.http.post<ApiResponse>(this.transactionUrl,transaction);
  }

  validateTransaction(validTransaction:ValidTransaction):Observable<String>{
    return this.http.post<String>(this.transactionValid,validTransaction);
  }

  account(openAccount: OpenAccount): Observable<String>{
    console.log(openAccount);
    return this.http.post<String>(`${this.openAccountUrl}`,openAccount);
  }

  registeruser(register : Registration) :Observable<string> {

    return this.http.post<string>(`${this.registerUrl}`,register);
  }

  loginuser(user : User) :Observable<string> {

    return this.http.post<string>(`${this.userUrl}`,user);

  }

  createAccountByCustomerId(account:Account):Observable<string>{
    return this.http.post<string>(this.createAccountUrl,account);
  }

  beneficiaryAccount(openBeneficiary: BeneficiaryRegister): Observable<Object>{
    console.log(openBeneficiary);
    return this.http.post(`${this.beneficiaryRegisterUrl}`,openBeneficiary);
  }

}
