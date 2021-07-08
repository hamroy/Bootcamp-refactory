var prompt = require('prompt');

// 
function checkPalindrom(str) {
    return str == str.toLowerCase().split('').reverse().join('');
}

function reverseString(str) {
    str = str.split("").reverse().join("");

    return str.split(" ").reverse().join(" ");
}

function checkFibonacci(query, count = 1, last = 0) {

    if (count < query) {
        return checkFibonacci(query, count + last, count);
    };
    if (count === query) {
        return true;
    }
    return count - query;
}

function fibonacci(n) {
    const arr = [15, 1, 3];
    var sum = arr[0] + arr[1] + arr[2];

    return checkFibonacci(sum);
}

function FizzBuzz(n) {
    var result = new Array(),
        answer = new Array(),
        mapedArray = new Array(),
        divisible3_5 = "FizzBuzz", // if i is divisible by 3 and 5.
        divisible3 = "Fizz", // if i is divisible by 3.
        divisible5 = "Buzz"; // if i is divisible by 5.

    for (let i = 1; i <= n; i++) {
        answer = answer.concat(i);
        result = answer;
    }

    answer = new Array();
    result.forEach(item => {
        if ((item % 3 == 0) && (item % 5 == 0)) {
            answer = answer.concat(divisible3_5);
        } else if (item % 3 == 0) {
            answer = answer.concat(divisible3);
        } else if (item % 5 == 0) {
            answer = answer.concat(divisible5);
        } else {
            answer = answer.concat(item);
        }
        mapedArray = answer;
    });

    return mapedArray;

}

//
console.log("=============Palindrome=============");
var str = "Radar";
console.log(str + " ==> " + checkPalindrom(str));
var str = "Malam";
console.log(str + " ==> " + checkPalindrom(str));
var str = "Kasur ini rusak";
console.log(str + " ==> " + checkPalindrom(str));
var str = "Ibu Ratna antar ubi";
console.log(str + " ==> " + checkPalindrom(str));
var str = "Malas";
console.log(str + " ==> " + checkPalindrom(str));
var str = "Makan nasi goreng";
console.log(str + " ==> " + checkPalindrom(str));
var str = "Balonku ada lima";
console.log(str + " ==> " + checkPalindrom(str));

console.log("=============Leap Year=============");
prompt.start();
prompt.get(['year1', 'year2'], function (err, result) {
    var i = result.year1;
    do {
        console.log(i);
        i++;
    }
    while (i <= result.year2);

    console.log("=============Reverse Words=============");

    console.log("I am A Great human ===> " + reverseString("I am A Great human"));

    console.log("=============Nearest Fibonacci=============");

    console.log("arr = [15,1,3] ===> " + fibonacci(2));

    console.log("=============FizzBuzz=============");

    console.log("Input: n = 3 ===> " + JSON.stringify(FizzBuzz(3)));
    console.log("Input: n = 5 ===> " + JSON.stringify(FizzBuzz(5)));
    console.log("Input: n = 15 ===> " + JSON.stringify(FizzBuzz(15)));



});


