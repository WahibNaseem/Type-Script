let bankAccount = {
    money: 4000,
    deposit(value: any){
        this.money += value;
    }
};

let myself = {
    name: 'Wahib',
    bankAccount: bankAccount,
    hoppies:['Swimming','Cooking','Hikking','Reading']
};


myself.bankAccount.deposit(2000);

console.log(myself);

//Re Write the above code explicitly
//simple way

// Through the simple way
/*let ublBankAccount: {money: number, output: (value: number)=> void} = {
    money: 4000,
    output: function(value: number): void {
       this.money += value;
    }
}
let meriSelf = {
    name: 'Wahib',
    bankAccount: ublBankAccount,
    hoppies:['Swimming','Cooking','Hikking','Reading']    
}
*/
// we will use type alias
type bankAccountNumber = {currentAmount:number, account:(depositAmount: number) => void};
// through complex type
let ublBankAccount: bankAccountNumber = {
    currentAmount: 4000,
    account: function(depositAmount: number): void {
           this.currentAmount += depositAmount;
    }
}

type mySelfReturn = {name: string, bankAccount: bankAccountNumber, hoppies: string[]};

let meriSelf = {
    name: 'Wahib',
    bankAccount: ublBankAccount,
    hoppies:['Swimming','Cooking','Hikking','Reading']    
}

meriSelf.bankAccount.account(5000);


console.log(meriSelf);