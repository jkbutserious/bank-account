// Business Logic ---------------------------

function BankAccount (accountName, accountBalance) {
  this.accountName = accountName,
  this.accountBalance = accountBalance
};

BankAccount.prototype.addAccount = function(userName, balance) {
  this.accountName = userName;
  this.accountBalance = balance;
}

BankAccount.prototype.balanceChange = function(balance) {
  this.accountBalance = balance;
}


// User Interface Logic --------------------------

$(document).ready(function() {
  let bankAccount = new BankAccount();
  $("form#register").submit(function(event) {
    event.preventDefault();

    const inputtedName = $("input#userName").val();
    const inputtedBalance = parseInt($("input#initialDeposit").val());
    bankAccount.addAccount(inputtedName, parseInt(inputtedBalance));

    $("input#userName").val("");
    $("input#initialDeposit").val("0");

    $("#currentBalance").text("$" + bankAccount.accountBalance);

  });

  $("form#updateBalance").submit(function(event) {
    event.preventDefault();

    const inputtedDeposit = parseInt($("input#depositAmount").val());
    const inputtedWithdrawal = parseInt($("input#withdrawalAmount").val());
    const updatedBalance = bankAccount.accountBalance + inputtedDeposit - inputtedWithdrawal
    bankAccount.balanceChange(updatedBalance);

    $("input#depositAmount").val("0");
    $("input#withdrawalAmount").val("0");

    $("#currentBalance").text("$" + bankAccount.accountBalance);

  });
});