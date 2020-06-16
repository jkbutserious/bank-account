// Business Logic ---------------------------

function BankAccount (accountName, accountBalance) {
  this.accountName = accountName,
  this.accountBalance = accountBalance
};

BankAccount.prototype.addAccount = function(userName, balance) {
  this.acccountName.push(userName);
  this.accountBalance.push(balance);
}

BankAccount.prototype.balanceChange = function(balance) {
  this.accountBalance.push(balance);
}


// User Interface Logic --------------------------

