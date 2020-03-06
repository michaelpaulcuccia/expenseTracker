//DOM elements
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

//test data
const dummyTransactions = [
    { id: 1, text: 'Flowers', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

//display transactions in DOM, 'HISTORY'
function addTransactionDOM(transaction) {
    //get sign
    //if transaction amount is less than zero for sign use '-', else use '+'
    const sign = transaction.amount < 0 ? '-' : '+';

    //item variable is create a 'li'
    const item = document.createElement('li');

    //add minusORplus class to item based on transaction amount value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    //Math.abs - 'In Math, ABS stands for Absolute Value. An Absolute Value basically just makes sure a number is positive.'
    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class='delete-btn'>x</button>`;

    //add to DOM - list - UL in History, gets appended with item
    list.appendChild(item);
}

//update the balance, income, and expense
function updateValues() {
    //loop through transactions and create a new array of transaction.amounts
    const amounts = transactions.map(transaction => transaction.amount);
    //console.log(amounts);
    
    //take acc and append onto that the current item (amount), start at 0, toFixed will add decimal places (2)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    //console.log(total);

    //get income
    //set to amounts, filter out items GREATER THAN zero to ensure it's income
    //reduce to add up income 
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc +=item), 0).toFixed(2);
    //console.log(income);

    //get expense 
    //set to amounts, filter out items LESS THAN zero
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1).toFixed(2);
    console.log(expense);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

//init app
function init() {
    //start with a blank list
    list.innerHTML = '';

    //loop through transactions and run addTransactionDOM on each one
    transactions.forEach(addTransactionDOM)

    updateValues();
}

init();



     