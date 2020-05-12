"use strict";
var bankAccount = {
    money: 4000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Wahib',
    bankAccount: bankAccount,
    hoppies: ['Swimming', 'Cooking', 'Hikking', 'Reading']
};
myself.bankAccount.deposit(2000);
console.log(myself);
// through complex type
var ublBankAccount = {
    currentAmount: 4000,
    account: function (depositAmount) {
        this.currentAmount += depositAmount;
    }
};
var meriSelf = {
    name: 'Wahib',
    bankAccount: ublBankAccount,
    hoppies: ['Swimming', 'Cooking', 'Hikking', 'Reading']
};
meriSelf.bankAccount.account(5000);
console.log(meriSelf);
