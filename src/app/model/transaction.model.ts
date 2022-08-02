import { Account } from "./account.model";
import { Beneficiary } from "./beneficiary.model";

export class Transaction{
    transactionId: number;
    transactionMode: String;
    transactionType: String;
    dateOfTransaction: Date;
    amount: Number;
    account:any;
    beneficiary:any;
}