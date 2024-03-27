# The Art of Calculation

In the grand tapestry of existence, numbers dance and intertwine, spinning a rhythm of reason that orchestrates the universe. You are tasked with crafting an exquisite instrument, a `Calculator`, to join this cosmic ballet.

Certainly, here are the instructions for this exercise:

### Instructions

1. **Setup**: Define a class named `Calculator`. The constructor of the class should have two properties:
    - `PI` which is equal to `Math.PI`
    - `E` which is equal to `Math.E`
    
2. **Methods**: Implement the following methods:

    - `ratio(x, y, width)`: This method should take three parameters - `x`, `y` and `width`, and returns the height based on the ratio x:y

    - `percentage(x, y)`: This method should take two parameters - `x` and `y`. Calculate the percentage of `x` in `y` and return it as a string with a '%' sign. If `y` is zero, return the error message 'Error: Divisor cannot be zero'.

    - `add(x, y)`: This method should take two parameters - `x` and `y`. Return the sum of `x` and `y`.

    - `subtract(x, y)`: This method should take two parameters - `x` and `y`. Return the difference of it (y - x).

    - `multiply(x, y)`: This method should take two parameters - `x` and `y`. Return the product of `x` and `y`.

    - `divide(x, y)`: This method should take two parameters - `x` and `y`. Return the quotient of `x` divided by `y`. If `y` is zero, return the error message 'Error: Divisor cannot be zero'.

    - `remainder(x, y)`: This method should take two parameters - `x` and `y`. Return the remainder of `x` divided by `y`. If `y` is zero, return the error message 'Error: Divisor cannot be zero'.

    - `elevate(x, y)`: This method should take two parameters - `x` and `y`. Return the power of `x` raised to `y`.

    - `sqrt(x)`: This method should take one parameter - `x`. Return the square root of `x`. If `x` is a negative number, return the error message 'Error: Cannot calculate the square root of a negative number'.

### Notes

- Remember to handle edge cases, such as division by zero and square root of a negative number.
- Ensure that all strings returned are in the exact format as specified in the instructions.
- Read more on: [Euler's Number](https://www.investopedia.com/terms/e/eulers-constant.asp#:~:text=Euler's%20number%20is%20an%20important,repeats%20(similar%20to%20pi).)


### Examples:
```js
console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.modulate(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
```