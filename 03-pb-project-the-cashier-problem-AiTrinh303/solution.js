function createCashCounter() {
  let cashBox = [
    { 50: 10 },
    { 20: 10 },
    { 10: 10 },
    { 5: 25 },
    { 2: 25 },
    { 1: 25 },
    { 0.5: 25 },
    { 0.2: 25 },
    { 0.1: 25 },
    { 0.05: 25 },
    { 0.02: 25 },
    { 0.01: 25 },
  ];

  return function (price, paidAmount) {
    let cashBackTotal = paidAmount - price;
   
    //if customer pays to little
    if (cashBackTotal<=0) {
      let missingAmount = price - paidAmount;
      missingAmount = missingAmount.toFixed(2)
      return `The customer needs to pay ${missingAmount} more!`
    }


    console.log(price, paidAmount);
    console.log(cashBackTotal);

    let change = cashBox.reduce((acc, curr) => {
      
      let note = parseFloat(Object.keys(curr));
      let availableNotes = Object.values(curr)[0];
      let numberOfNotes = 0;

      //adding note or coin to cashBox
      if (paidAmount === note) {
        curr[paidAmount] += 1;
      }
      //check if notes/coins fit into cashBackTotal and how often
      let cashCheck = cashBackTotal / note;
      // console.log(cashCheck);
      
      if (availableNotes < cashCheck && availableNotes >= 1) {
        numberOfNotes = availableNotes;
      }else if (cashCheck >= 1 && availableNotes >= 1) {
        numberOfNotes = Math.trunc(cashCheck); //gets back integer of number of notes/coins = value of new object
      }
      let newObject = { [note]: numberOfNotes };
      
      if (numberOfNotes>0) {
      acc.push(newObject);
      cashBackTotal -= numberOfNotes * note; //reduces the cashBackTotal by the amount in new object
      cashBackTotal = cashBackTotal.toFixed(2); //rounds up weird decimal points

      curr[note] -= numberOfNotes; //updates cashBox
      }return acc;
    }, []);

    if (cashBackTotal > 0) {
      return "Not enough change available.";
    }
    return {change, cashBox};
  };
}

const cashCounter = createCashCounter();

console.log(cashCounter(4.77, 3));
console.log(cashCounter(4.77, 20));
console.log(cashCounter(2.35, 5));
console.log(cashCounter(23.90, 50));
console.log(cashCounter(4.77, 20));
console.log(cashCounter(2.35, 5));
console.log(cashCounter(4.50,500));
console.log(cashCounter(4.50,500));
console.log(cashCounter(4.50,500));
