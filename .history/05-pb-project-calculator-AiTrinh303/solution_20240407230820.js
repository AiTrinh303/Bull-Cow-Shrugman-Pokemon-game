// Your code here!
class Calculator {
    constructor() {
      this.PI = Math.PI;
      this.E = Math.E;
    }
  
    // calculate the ratio of two numbers
    ratio(x, y, width) {
      return (y * width) / x;
    }
  
    // Calculate the percentage of two numbers
    percentage(x, y) {
      if (y === 0) {
        return 'Error: Divisor cannot be zero';
      }
      const result = (x / y) * 100;
      return `${result}%`;
    }
  
    // Calculate the sum
    add(x, y) {
      return x + y;
    }
  
    // Calculate the difference
    subtract(x, y) {
      return Math.abs(y - x);
    }
  
    // Calculate the multiplication
    multiply(x, y) {
      return x * y;
    }
  
    // Calculate the division
    divide(x, y) {
      if (y === 0) {
        return 'Error: Divisor cannot be zero';
      }
      return x / y;
    }
  
    // Calculate the remainder
    remainder(x, y) {
      if (y === 0) {
        return 'Error: Divisor cannot be zero';
      }
      return x % y;
    }
  
    // Calculate the power
    elevate(x, y) {
      return Math.pow(x, y);
    }
  
    // Calculate the square root
    sqrt(x) {
      if (x < 0) {
        return 'Error: Cannot calculate the square root of a negative number';
      }
      return Math.sqrt(x);
    }

    /**
    * 1. Compound Interest Calculation with Euler's Number:
    *   In finance, the compound interest formula often utilizes Euler's number. For example, if you have an investment( P )with an annual interest rate (r), and you want to calculate the final amount (A) after (t )years, the formula is: A = P * e^(rt)
    */

    compoundInterest(P, r, t) {
        return (P * Math.pow(this.E, r * t)).toFixed(2)+ " $";
      }


    /**
     * 2. Compound Interest with Periodic Contributions
     * In finance, you can also calculate the compound interest with periodic contributions. For example, if you have an initial investment (P), an annual interest rate (r), a monthly contribution (c), and you want to calculate the final amount (A) after (t) years, the formula is: A = P * e^(rt) + c * (e^(rt) - 1) / r
     */ 
    
    compoundInterestWithContributions(P, r, c, t) {
        return (P * this.elevate(this.E, r * t) + c * (this.elevate(this.E, r * t) - 1) / r).toFixed(2) + " $";
      }

    /**
    * 3. Population Growth Calculation with Euler's Number:
    * In biology, the exponential growth of a population can be calculated with Euler's number. For example, if you have an initial population Po, a growth rate k, and you want to calculate the population at time t, the formula is: P(t) = Po * e^(kt)
    * */

    populationAtTime(Po, k, t) {
        return (Po * Math.pow(this.E, k * t)).toFixed(0) + " people";
    }


    /**
    * 4.Weight Gain Model with Euler's Number:
    * In health, the weight gain of a person can be calculated with Euler's number. For example, if you have an initial weight Wo, a weight gain rate r, and you want to calculate the weight at time t, the formula is: W(t) = Wo * e^(rt)
    */ 

    weightGain(Wo, r, t) {
        return (Wo * Math.pow(this.E, r * t)).toFixed(2) + " kg";
    }


    /**-------------------------------------------------------- My favorite function :)) ---------------------------------------------------------
    * 5. Weight Loss Calculation with Euler's Number:
    * In health, the weight loss of a person can be calculated with Euler's number. For example, if you have an initial weight W0, a weight loss rate r, and you want to calculate the weight at time t, the formula is: W(t) = Wo * e^(-rt)
    */ 

    weightLoss(Wo, r, t) {
        return (Wo * Math.pow(this.E, -r * t)).toFixed(2) + " kg";
    }
          
  }
  
console.log();
console.log('-------------------------------------Testing-----------------------------------------');
console.log();
  // Test the calculator
  const calc = new Calculator();
  console.log(calc.ratio(5, 7, 300));      // 420
  console.log(calc.percentage(3, 12));     // 25%
  console.log(calc.add(5, 7));             // 12
  console.log(calc.subtract(5, 7));        // 2
  console.log(calc.multiply(5, 7));        // 35
  console.log(calc.divide(35, 7));         // 5
  console.log(calc.remainder(7, 5));       // 2
  console.log(calc.elevate(5, 3));         // 125
  console.log(calc.sqrt(25));              // 5
  console.log(calc.sqrt(-25));             // Error: Cannot calculate the square root of a negative number
  console.log(calc.divide(10, 0));         // Error: Divisor cannot be zero
  
  console.log();
  console.log('-------------------------------------Extra 0-----------------------------------------');
  console.log();

//1. Test the compoundInterest method
const principal = 10000; // Initial amount
const annualInterestRate = 0.05; // Annual interest rate (5%)
const years = 10; // Number of years
console.log(`1. With an initial amount ${principal} $, the annual interest rate ${annualInterestRate}, the final amount after ${years} years is: ${calc.compoundInterest( principal, annualInterestRate, years)}`); // 1648.72
console.log();


//2. Test the compoundInterestWithContributions method
const initialInvestment = 10000; // Initial investment
const annualInterest = 0.05; // Annual interest rate (5%)
const monthlyContribution = 100; // Monthly contribution
const yearsInvested = 10; // Number of years
console.log(`2. With an initial investment of ${initialInvestment} $, an annual interest rate of ${annualInterest}, a monthly contribution of ${monthlyContribution} $, the final amount after ${yearsInvested} years is: ${calc.compoundInterestWithContributions(initialInvestment, annualInterest, monthlyContribution, yearsInvested)}`); // 1648.72
console.log();


//3. Test the populationAtTime method
const initialPopulation = 1000; // Initial population
const growthRate = 0.03; // Growth rate (3% per year)
const yearsPassed = 20; // Years passed
console.log(`3. With an initial population of ${initialPopulation} people and a growth rate of ${growthRate}, the population after ${yearsPassed} years is: ${calc.populationAtTime(initialPopulation, growthRate, yearsPassed)}`); // 1804.98
console.log();


//4. Test the weightGain method
const initial = 3; // Initial weight
const weightGainRate = 0.05; // Weight gain rate (5% per day)
const days = 10; // Days passed
console.log(`4. With an initial weight of ${initial} kg and a weight gain rate of ${weightGainRate}, the weight after ${days} days is: ${calc.weightGain(initial, weightGainRate, days)}`); //4.95
console.log();


//5. Test the weightLoss method
const initialWeight = 47; // Initial weight
const weightLossRate = 0.01; // Weight loss rate (1% per day)
const daysPassed = 10; // Days passed
console.log(`5. With an initial weight of ${initialWeight} kg and a weight loss rate of ${weightLossRate}, the weight after ${daysPassed} days is: ${calc.weightLoss(initialWeight, weightLossRate, daysPassed)}`); // 42.53


console.log();
console.log('-------------------------------------Extra 1:Financial-----------------------------------------');
console.log();
//Extra - create subclasses for the Calculator class - practical example

//FinancialCalculator Class
//This is a subclass of Calculator to perform financial calculations such as interest rates, future value, present value, etc.
class FinancialCalculator extends Calculator {
    constructor() {
      super();
    }
  
    // This method calculates the future value (FV) given the present value (P), annual interest rate (r), and number of years (t)
    futureValue(PV, r, t) {
      return (this.multiply(PV, this.elevate(1 + r, t))).toFixed(2); // Formula:  FV = PV * (1 + r)^t
    }
  
    //  This method calculates the present value (PV) given the future value (FV), annual interest rate (r), and number of years (t)
     presentValue(FV, r, t) {
      return (this.divide(FV, this.elevate(1 + r, t))).toFixed(2); // Formula: PV = FV / (1 + r)^t
    }
  
    // This method calculates the annual interest rate (r) needed to achieve a future value (FV) from a present value (PV) after a certain number of years (t)
    interestRate(PV, FV, t) {
      const ratio = this.divide(FV, PV);
      return (this.subtract(this.elevate(ratio, this.divide(1, t)), 1)).toFixed(2); // Formula: r = (FV / PV)^(1/t) - 1
    }
  }

  // Test the FinancialCalculator class
  const financialCalc = new FinancialCalculator();
console.log(`1. Future Value: ${financialCalc.futureValue(10000, 0.05, 10)} $`); 
console.log();

console.log(`2. Present Value: ${financialCalc.presentValue(1276.28, 0.05, 5)} $`);
console.log(); 

console.log(`3. Interest Rate: ${financialCalc.interestRate(1000, 1276.28, 5)} %`);  
console.log();


console.log();
console.log('--------------------------------------Extra 2:Geometry-----------------------------------------');
console.log();

//Extra: create another subclass to perform geometric calculations such as area and perimeter of rectangles and circles.
class GeometryCalculator extends Calculator {
    constructor() {
      super();
    }
  
    //1. Calculate the area of a rectangle
    rectangleArea(width, height) {
      return this.multiply(width, height); // Formula: Area = width * height
    }
  
    //2. Calculate the perimeter of a rectangle
    rectanglePerimeter(width, height) {
      return this.multiply(2, this.add(width, height)); // Formula: Perimeter = 2 * (width + height)
    }
  
    //3. Calculate the area of a circle
    circleArea(radius) {
      return (this.multiply(this.PI, this.elevate(radius, 2))).toFixed(2); // Formula: Area = π * r^2
    }
  
    //4. Calculate the perimeter of a circle
    circlePerimeter(radius) {
      return (this.multiply(2, this.multiply(this.PI, radius))).toFixed(2); // Formula: Perimeter = 2 * π * r
    }
  }
  
// Test the GeometryCalculator class
const geometryCalc = new GeometryCalculator();
console.log(`1. Rectangle Area: ${geometryCalc.rectangleArea(5, 7)} m^2`);
console.log();
console.log(`2. Rectangle Perimeter: ${geometryCalc.rectanglePerimeter(5, 7)} m`);
console.log();
console.log(`3. Circle Area: ${geometryCalc.circleArea(5)} m^2`);
console.log();
console.log(`4. Circle Perimeter: ${geometryCalc.circlePerimeter(5)} m`);
console.log();  



console.log();
console.log('--------------------------------------Extra 3:Calculate Calories-----------------------------------------');
console.log();

class HealthCalculator extends Calculator {
    constructor() {
      super();
    }
  
    // Calculate BMI (Body Mass Index) -using the weight (in kilograms) and height (in centimeters).
    calculateBMI(weight, height) {
      const heightInMeter = this.divide(height, 100); // Convert cm to meter - 1 meter = 100 cm
      return this.divide(weight, this.elevate(heightInMeter, 2)); // Formula: BMI = weight / height^2
    }
  
    // Function to assess health based on BMI
    healthAssessment(bmi) {
        let assessment = '';
        if (bmi < 18.5) {
        assessment = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
        assessment = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
        assessment = 'Overweight';
        } else {
        assessment = 'Obese';
        }
        return assessment;
    }


    // Calculate maintenance calories needed to maintain weight based on weight, height, age, and gender.
    //the Basal Metabolic Rate (BMR) using different formulas for male and female:
    // For males: BMR = 88.362*W + 13.397*H − 5.677*A + 5
    // For females: BMR = 447.593*W + 9.247*H − 4.330*A − 161
    // W = weight in kg, H = height in cm, A = age in years

    calculateMaintenanceCalories(weight, height, age, gender) {
      let BMR;
      if (gender === 'male') {
        BMR = 88.362 * weight + 13.397 * height - 5.677 * age + 5;
        // BMR = this.add(this.multiply(88.362, weight), this.multiply(13.397, height));
        // BMR = this.subtract(BMR, this.multiply(5.677, age));
        // BMR += 5;
      } else {
        BMR = 447.593 * weight + 9.247 * height - 4.330 * age - 161;
        // BMR = this.add(this.multiply(447.593, weight), this.multiply(9.247, height));
        // BMR = this.subtract(BMR, this.multiply(4.330, age));
        // BMR -= 161;
      }
      return BMR;
    }
  
    // Calculates the daily calorie intake needed for weight loss based on the desired weekly weight loss goal.

    calculateCaloriesForWeightLoss(weight, height, age, gender, weeklyWeightLoss) {
      const maintenanceCalories = this.calculateMaintenanceCalories(weight, height, age, gender);
      const caloriesPerWeek = this.multiply(weeklyWeightLoss, 7700); // assuming 1 kg = 7700 calories
      return this.subtract(maintenanceCalories, caloriesPerWeek);
    }
  }
  

// Test the HealthCalculator class
const healthCalc = new HealthCalculator();
console.log(`1. BMI is: ${healthCalc.calculateBMI(70, 170)}`);
console.log();


let weight = 46; // Weight in kg
let height = 163; // Height in cm


console.log(`2. Health Status: ${healthCalc.healthAssessment(healthCalc.calculateBMI(weight, height))}`);
console.log();


let age = 33; // Age
let gender = 'female'

console.log(`3. A ${gender} with ${weight} kg, ${height} cm, ${age} years old, the total amount of calories consumed per day is ${healthCalc.calculateMaintenanceCalories(weight, height, age, gender)} calories to maintain weight `);
console.log();

let weightLossGoal = 0.5; // 0.5 kg per week
console.log(`4. If a ${gender} with ${weight} kg, ${height} cm, ${age} years old, want to lose ${weightLossGoal} kg per week, the total amount of calories consumed per day is ${healthCalc.calculateCaloriesForWeightLoss(weight, height, age, gender, weightLossGoal)} calories to lose weight `);
console.log();










