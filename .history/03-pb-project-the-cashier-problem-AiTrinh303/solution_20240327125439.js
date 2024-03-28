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

    let change = cashBox.reduce((acc, curr) => {
      //adding note or coin to cashBox
      if (paidAmount === parseFloat(Object.keys(curr)[0])) {
        curr[paidAmount] += 1;
      }
      //check if notes/coins fit into cashBack and how often
      let cashCheck = cashBackTotal / parseFloat(Object.keys(curr)[0]);
      //check if note fits in at least once and cashBox has the number of notes/coins available
      // console.log(cashCheck);
      
      if (cashCheck >= 1 && Object.values(curr) >= 1) {
        
        let numberOfNotes = Math.trunc(cashCheck); //gets back integer of number of notes/coins = value of new object

        let note = Object.keys(curr); // sets new key for object to add
        
        let newObject = { [note]: numberOfNotes };
        acc.push(newObject);

        cashBackTotal -= numberOfNotes * note; //reduces the cashBackTotal by the amount in new object
        cashBackTotal = cashBackTotal.toFixed(2); //rounds up weird decimal points

        curr[note] -= numberOfNotes; //updates cashBox
      }
      return acc;
    }, []);
    
    return {change, cashBox};
  };
}

const cashCounter = createCashCounter();

console.log(cashCounter(4.77, 20));
console.log(cashCounter(2.35, 5));
console.log(cashCounter(23.90, 50));
console.log(cashCounter(4.77, 20));
console.log(cashCounter(2.35, 5));
