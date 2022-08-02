export class GlobalConstants{
    public static AccountNumber:number;

    setGlobalVar(currentAccountNo:number){
        GlobalConstants.AccountNumber=currentAccountNo;
    }
    getGlobalVar():number{
        return GlobalConstants.AccountNumber;
    }
}