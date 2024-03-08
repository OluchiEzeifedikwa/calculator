
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    document.getElementById("display").innerHTML += one.innerHTML
})
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    document.getElementById("display").innerHTML += two.innerHTML
})
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    document.getElementById("display").innerHTML += three.innerHTML
})
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    document.getElementById("display").innerHTML += four.innerHTML
})
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    document.getElementById("display").innerHTML += five.innerHTML
})
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    document.getElementById("display").innerHTML += six.innerHTML
})
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    document.getElementById("display").innerHTML += seven.innerHTML
})
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    document.getElementById("display").innerHTML += eight.innerHTML
})
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    document.getElementById("display").innerHTML += nine.innerHTML
})
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    document.getElementById("display").innerHTML += zero.innerHTML
})
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    document.getElementById("display").innerHTML += decimal.innerHTML
})
const action = document.querySelector('#action');
action.addEventListener('click', () => {
    document.getElementById("display").innerHTML += action.innerHTML
})
const modulus = document.querySelector('#modulus');
modulus.addEventListener('click', () => {
    document.getElementById("display").innerHTML += modulus.innerHTML
})

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    document.getElementById("display").innerHTML += divide.innerHTML
})

const subtract= document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    document.getElementById("display").innerHTML += subtract.innerHTML
})

const addition = document.querySelector('#addition');
addition.addEventListener('click', () => {
    document.getElementById("display").innerHTML += addition.innerHTML
})

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    document.getElementById("display").innerHTML += multiply.innerHTML
})




const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    const number = document.getElementById('display').innerHTML;
    const solution = eval(number);
    document.getElementById("display").innerHTML = solution
})



const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.getElementById('display').innerHTML = ''
})



 