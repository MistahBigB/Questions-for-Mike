// Expense has description, amount
// addExpense adds a new object w/ description, amount
// getAccountSummary totals up all expenses -> Brandon B has X in expenses
// use a forEach to get account summary

let account = {
    name: 'Brandon B',
    expenses: [{
        description: 'Sanity',
        amount: 0
    }]
}

const addExpense = function (description, amount) {
    const expense = {
        description,
        amount
    }
    account.expenses.push(expense)
}


const getAccountSummary = function (account) {
        let sumExpense = 0
        account.expenses.forEach(function(expense) {
        sumExpense = sumExpense + expense.amount
        //console.log(sumExpense)
        })    
        console.log(`${account.name} has $${sumExpense} expenses this month!`)
    }

addExpense('Rent', 575)
addExpense('Food', 200)
addExpense('Gas', 150)

console.log(account)
console.log(getAccountSummary(account))