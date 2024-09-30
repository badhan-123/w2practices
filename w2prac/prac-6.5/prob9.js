function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
      return "invalid input";
    }
  
    const totalPayments = payments.reduce((sum, payment) => sum + payment, 0);
  
    let taxableAmount;
    if (totalPayments > 3000) {
        taxableAmount = totalPayments - 3000;
    } else {
        taxableAmount = 0;
    }
        const tax = taxableAmount * 0.10;
  
    const totalSavings = totalPayments - tax - livingCost;
  
    return totalSavings > 0 ? totalSavings : "earn more";
  }
  
  console.log(monthlySavings([1000, 2000, 3000], 5400)); 
  console.log(monthlySavings([1000, 2000, 2500], 5000)); 
  console.log(monthlySavings([900, 2700, 3400], 10000)); 
  console.log(monthlySavings(100, [900, 2700, 3400]));   
  console.log(monthlySavings([1000, 2000, 3000], "text")); 