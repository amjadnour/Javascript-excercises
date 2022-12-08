class Bank {
    branches = []
}

class Branch {
    address = ""
    customers = []
    accounts = []
    constructor(address) {
        this.address = address
    }
    signUp(customer) {
        this.customers.push(customer)
    }
    openAccount(account, customers) {
        account.customers = customers
        for (c of customers) {
            c.accounts.push(account)
        }
        this.accounts.push(account)
    }
    dailyUpdate() {
        for (account of this.accounts) {
            account.doCharges()
        }
    }
}

class Customer {
    name = ""
    address = ""
    securityCode = ""
    accounts = []
    constructor(name, address) {
        this.name = name
        this.address = address
    }
}

class Account {
    balance = 0
    transactions = []
    customers = []
    doCharges() {
        return
    }
    addTransaction(transaction) {
        this.transactions.push(transaction)
        this.balance += transaction.amount
    }
}

class CurrentAccount extends Account {
    overdraftCharge = 0.10
    doCharges() {
        if (this.balance > 0) {
            return
        }
        this.balance += this.balance * this.overdraftCharge
    }
}

class SavingsAccount extends Account {
    interest = 0.01
    doCharges() {
        if (this.balance < 0) {
            return
        }
        this.balance += this.balance * this.interest

    }
}

class Transaction {
    amount = 0
    description = ""
    constructor(amount, description) {
        this.amount = amount
        this.description = description
    }
}
