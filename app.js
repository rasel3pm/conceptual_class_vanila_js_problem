//Coding challenge #1. Print numbers from 1 to 10

function oneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
oneToTen();

//Coding challenge #2. Print the odd numbers less than 100

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Coding challenge #3: Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  let row = "7 * " + i + " = " + 7 * i;
  console.log(row);
}
//string 7 rakha hoyaca static vabe with * and i protibar ak kora barbe and aro akti string = last 7 pritbar i ar man ar satha + hote thakbe.

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
  printTable(i);
  console.log("");
}

function printTable(r) {
  for (var i = 1; i <= 10; i++) {
    var tables = r + " * " + i + " = " + r * i;
    console.log(tables);
  }
}

//for loop amader protibar 1 - 10 porjonto number dicca and clg ta faka string dicca,
//for loop ar modda functon call kora hocca i ar man newar jonno
//  console.log(""); ta proti action ses howar por faka kora dicca
//printTable function ta paramiter hisaba for ka call korca,
//functon ar vito for loop ta 1 thaka 10 porjonto gurca
// n jokon 1 tarpor bosca * fn-for ar i dicca 1 = n ar maner satha * hocca i ar

// Coding challenge #5: Calculate the sum of numbers from 1 to 10
var sum = 0;

for (var i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);
// i ar man ar satha satha sum ar man bere plus hocca

// Coding challenge #6: Calculate 10!
var prod = 1;

for (var i = 1; i <= 10; i++) {
  prod *= i;
}
console.log(sum);

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
var sum = 0;

for (var i = 11; i <= 30; i += 2) {
  sum += i;
}
console.log(sum);

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(n) {
  return n * 1.8 + 32;
}

var r = celsiusToFahrenheit(20);
console.log(r);

//amora jodi Celsius ka 1.8 multiply kora 32 plus kori tahola Fahrenheit pai

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(n) {
  return (n - 32) / 1.8;
}

var r = fahrenheitToCelsius(68);
console.log(r);

// Fahrenheit ka 32 diya - kora 1.8 diya vag korla

// Coding challenge #10: Calculate the sum of numbers in an array of numbers
function sumArray(ar) {
  var sum = 0;

  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
console.log(sum);

//ar variable function ar argumnt hisaba nicca ,loop ar maddoma sum ar man 2+3=5+3=8 bartaca ar plus hocca

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function averageArray(ar) {
  var ln = ar.length;
  var sum = 0;
  for (var i = 0; i < ln; i++) {
    sum += ar[i];
  }
  return sum / ln;
}

var ar = [1, 3, 9, 15, 90];
var aver = averageArray(ar);
console.log("Avarage: ", aver);

//ar variable function ar argumnt hisaba nicca ,loop ar maddoma sum ar man 1+3=4+9=13+15=28+90=118 hocca sum/length count then return avg

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  var ar2 = [];
  for (var ln of ar) {
    if (ln >= 0) {
      ar2.push(ln);
    }
  }
  return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

//condition diya check kota hoyaca ja el jodi 0 caya boro or soman hoy tahola ar2 var a el ta push kora dibe,,ar2 return korla positive number dibe
// - number full number ar caya boro

// Coding challenge #13: Find the maximum number in an array of numbers

function findMax(arr) {
  var max = [0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
//jodi argument ar value max value ar boro hoy tahola max value hobe arr[i]
