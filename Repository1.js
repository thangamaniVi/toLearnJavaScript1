// Started learning javaScript. This is for GitHub Repository.
//  Type -> node filename.js in command prompt in Terminal. For the Inputs the user gets outputs
const readline = require('readline');
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rL.question(`Enter your requirement of Loan Amount  `, function (loanAmt) {
  rL.question('Enter your annual interest rate compounding monthly   ', function (intRate) {
  rL.question('Enter Your Repayment Period in Number of Years  ', function (numYears) {
        console.log(`${loanAmt} is your Loan amount, Annual interest rate at ${intRate}, 
    repayable in years ${numYears}. Your Loan Application will be processed in 7 days. Thanks for choosing us as your lender.`);
    rL.close(); // without this line also, code is working.
  });
});
});
rL.on('close', function() {
    process.exit(0);
  });
  // Output : Enter your requirement of Loan Amount  Input 200000
// Output : Enter your annual interest rate compounding monthly  Input 6
// Output : Enter Your Repayment Period in Number of Years  Input 3
// Output : 200000 is your Loan amount, Annual interest rate at 6, 
   // repayable in years 3. Your Loan Application will be processed in 7 days. Thanks for choosing us as your lender.
