let Bank = "BANK_NAME";
BANK_NAME = "Local Me Bank";
const customerAccounts = [{ accountId: 1001, accountHolder: "Joseph Ibukun",
balance: 800, accountType: "Current"},
{accountId: 1002, accountHolder: "Olumide Nathaniel", balance: 400,
    accountType: "Savings"}];
    //find account by No
const findAccount = id => customerAccounts.find(account => account.accountId === id);
// Core functions
function checkBalance(id) {
    const account = findAccount(id);
    console.log(`${account.accountHolder} (${account.accountId}) balance: 
        #${account.balance.toFixed(2)}`);
} 
function deposit(id, amount){
    const account = findAccount(id);
    if (amount > 0) {
        account.balance += amount;
        console.log(`Deposited #${amount} to ${account.accountHolder}. Bank: ${BANK_NAME}. New balance: #${account.balance.toFixed(2)}`);
    }else{
        console.log("Deposit must be a positive amount.");
    }
}function withdraw(id, amount){
    const account = findAccount(id);
    const FEE_RATE = 0.01;
    const fee =+(amount * FEE_RATE).toFixed(2);
    if (account.balance >= amount + fee){
        account.balance -= amount + fee;
        console.log(`withdrew #${amount}(+#${fee}). New balance: #${account.balance.toFixed(2)}`);
    }else{
        console.log("insufficient funds.");
    }
}
// Example usage
console.log("=== Initial Balances ===");
checkBalance(1001);
checkBalance(1002);

console.log("\n=== Deposits ===");
deposit(1001, 200);
deposit(1002, 150);

console.log("\n=== withdraw (successful) ===");
withdraw(1001, 100);
withdraw(1002, 50);

console.log("\n=== withdraw (insufficient funds) ===");
withdraw(1001, 1000);
withdraw(1002, 600);

console.log("\n=== Final Balances ===");
checkBalance(1001);
checkBalance(1002);

console.log("\n=== Scope Check ===");
try {
    console.log(FEE_RATE); // This should throw an error
} catch (error) {
    console.log("FEE_RATE is not accessible outside the withdraw function.");
}