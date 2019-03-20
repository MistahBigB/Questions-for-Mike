let account = {
    name: 'Brandon B',
    expenses: 0,
    income: 0,
    balance: 0
}
//get an initial summary
let getSummary = function (account) {
    return{
    summary: `${account.name} has $${account.income} in income, and $${account.expenses} in expenses.`
    } 
}
let calcBalance = function (account) {
    account.balance = account.income - account.expenses
}
let accountSummary = getSummary(account)
console.log(accountSummary.summary)

//addExpense
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function (account, bigBucks) {
    account.income = account.income + bigBucks
    
}

addExpense(account, 2.50)
addIncome(account, 1000)
calcBalance(account)


//get statement
console.log(`${account.name} has a $${account.balance} credit, with $${account.income} in income, and $${account.expenses} in expenses.`)
//getSummary(account) --> If I comment out the above line and uncomment this line, why doesn't it show the new values for object account?


//reset account
//an alternative would be to set account.X = account.X - account.X


let resetExpenses = function (account) {
    account.expenses = 0
}
let resetIncome = function (account) {
    account.income = 0
}    

resetExpenses(account)
resetIncome(account)
calcBalance(account)
console.log(account)
console.log('GONE! ALLLLL GONE!!!!')


//get statement
/* 
addExpense(myAccount, 2.50)
addIncome(myAccount, 1000)
console.log(myAccount) */ 