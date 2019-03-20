let myAccount = {
    name: 'Brandon B',
    expenses: 0,
    income: 0,
    balance: 0
}
//get an initial summary
/* let getSummary = function (account) {
    return{
    summary: `${name} has a $${balance} credit, with $${income} in income, and $${expenses} in expenses.`
    } 
}
let accountSummary = getSummary(myAccount)
console.log(accountsummary.balance)
 */
//addExpense
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function (account, bigBucks) {
    account.income = account.income + bigBucks
    
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 1000)
let calcBalance = function (account) {
    account.balance = account.income - account.expenses
}


//get statement
let getSummary = function (){
    return{
    summary: `${name} has a $${balance} credit, with $${income} in income, and $${expenses} in expenses.`
    } 
}
let accountSummary = getSummary(myAccount)

//reset account
//an alternative would be to set account.X = account.X - account.X
let resetExpenses = function (account) {
    account.expenses = 0
}
let resetIncome = function (account) {
    account.income = 0
}    
resetExpenses(myAccount)
resetIncome(myAccount)
console.log(myAccount)
console.log('GONE! ALLLLL GONE!!!!')


//get statement
/* 
addExpense(myAccount, 2.50)
addIncome(myAccount, 1000)
console.log(myAccount) */