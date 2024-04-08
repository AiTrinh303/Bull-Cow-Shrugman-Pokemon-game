import chalk from 'chalk';
import promptSync from 'prompt-sync';

console.log(chalk.blue('Hello world!'));

const prompt = promptSync();

const name = prompt('What is your name? ');

console.log(chalk.green(`Hello, ${name}!`));