//1.1/data type
let input_cash=1000;
let current_liabilities=500;
let Cash_flow_ratio =input_cash/current_liabilities;
console.log(Cash_flow_ratio);
//2
let input_revenues=1000;
let expenses=500;
let Net_income=input_revenues-expenses;
console.log(Net_income);
//3
let input_liabilities=1000;
let equity=500;
let Total_assets=input_liabilities+equity;
console.log(Total_assets);
//4
let input_profit=1000;
let sales=500;
let Net_income2=input_profit*sales;
console.log(Net_income2);
//5
let x=7;
let y=9;
let z=2;
let avg=(x+y+z)/3;
console.log(avg);
6
let price=150;
let discount=0.3;
let out_discount=price-(price*discount);
console.log(out_discount);
//7
let age=20;
let Age_limit =age>18 && age < 30;
console.log(Age_limit);
//8
let number1 =2;
let number2=3;
let Exponential = (number1)**(number2);
console.log(Exponential);
//9
let num1=10;
let num2=4;
let remainder = num1 % num2;
console.log(remainder);
////////////////////////////////
//2.1/string
let string="Welcome to Orange";
console.log(string.toUpperCase());
console.log(string.slice(8, 10).toUpperCase());
console.log(string.replace("Welcome to", "Hello from"));
console.log(string.toLocaleLowerCase());
console.log(string.length);
console.log(string.replace("Orange", '"Orange"'));
console.log(string + " Jordan");
//2.2
let string1 = "cactus";
let firstChar = string1[0]; 
let rest = string1.slice(1);
let result = firstChar + rest.replaceAll(firstChar, '*');
console.log(result); 
/////////////////////
//3.1arrays
let arr =['Coding', 'Academy', 'By', 'Orange'] ;
console.log(arr.concat("Jordan"));//كلمه بالاخر
console.log(arr.slice(0, 2));
let arr2=arr;
arr2.unshift('Welcome');
console.log(arr2.concat("jordan"));
let arr3=arr;
arr3.unshift('Academy');
console.log(arr3.slice(0,3));
console.log(arr[0],arr[1],arr[2],arr[3]);
console.log(arr.slice(2));
console.log(arr);
console.log([arr[2], arr[5]]); 
//3.2
var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  
vegetables.pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);
fruit.push(orangeIndex);
console.log(orangeIndex);
var vegLength = vegetables.length;
vegetables.push(vegLength);
console.log(vegLength);
var food = fruit.concat(vegetables);
console.log(food);
food.splice(4, 2);
console.log(food);
food.reverse();
console.log(food);
var foodString = food.join(",");////
console.log(foodString);
//////////////////////
//4.1 conditionals

// 1. Age Conditional Code
const birthYear = 2000;
const currentYear = new Date().getFullYear();
const candidateAge = currentYear - birthYear;

if (candidateAge > 60) {
  console.log("You may join the seniors’ program.");
} else if (candidateAge > 30) {
  console.log("You are not eligible. You may join other programs.");
} else if (candidateAge >= 18 && candidateAge <= 30) {
  console.log("You are eligible. Start your application.");
} else if (candidateAge < 18) {
  console.log("You may join the kids' program.");
}
function switchCase(str) {
  return str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
}
function toCamelCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}
function removeElement(arr, element) {
  return arr.filter(item => item !== element);
}
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
function isNumber(val) {
  return typeof val === "number" && !isNaN(val);
}
function findLargest(a, b) {
  return a >= b ? a : b;
}
function checkTriangle(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || b === c || a === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}
function isInRange(num, min, max) {
  return num >= min && num <= max;
}
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//////////////////
//loop

let birthYear1 = 2002;

let currentYear1 = new Date().getFullYear();
let age1 = currentYear1 - birthYear1;

if (age1 > 60) {
    console.log("You may join the seniors’ program.");
} else if (age1 > 30) {
    console.log("You are not eligible. You may join other programs.");
} else if (age1 >= 18) {
    console.log("You are eligible. Start your application.");
} else {
    console.log("You may join the kids' program.");
}



function switchCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }

    return result;
}

console.log(switchCase("OrAnGe"));



function removeSpaces(str) {
    return str.replaceAll(" ", "");
}

console.log(removeSpaces("Coding Academy by Orange"));



function removeElement(array, element) {
    return array.filter(item => item !== element);
}

console.log(
    removeElement(
        ["Coding", "Academy", "By", "Orange"],
        "By"
    )
);



for (let i = 0; i <= 20; i++) {
    console.log(i);
}



for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}



for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}



for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}



let text1 = "CodingAcademy";
let array1 = [7, 500, "KH404", "black", 36];

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}



for (let i = text1.length - 1; i >= 0; i--) {
    console.log(text1[i]);
}



let numbers1 = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens1 = [];
let odds1 = [];

for (let i = 0; i < numbers1.length; i++) {

    if (numbers1[i] % 2 === 0) {
        evens1.push(numbers1[i]);
    } else {
        odds1.push(numbers1[i]);
    }
}

console.log("Even numbers:", evens1);
console.log("Odd numbers:", odds1);



let proteins1 = ["chicken", "pork", "tofu", "beef", "fish", "beans"];

let grains1 = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];

let vegetables1 = ["peas", "green beans", "kale", "edamame", "broccoli", "asparagus"];

let beverages1 = ["juice", "milk", "water", "soy milk", "soda", "tea"];

let desserts1 = ["apple", "banana", "more kale", "ice cream", "chocolate", "kiwi"];

let numberOfMeals1 = 6;

for (let i = 0; i < numberOfMeals1; i++) {

    let meal1 = {
        protein: proteins1[i % proteins1.length],
        grain: grains1[i % grains1.length],
        vegetable: vegetables1[i % vegetables1.length],
        beverage: beverages1[i % beverages1.length],
        dessert: desserts1[i % desserts1.length]
    };

    console.log(meal1);
}



function getProperties(obj) {
    return Object.keys(obj);
}

console.log(getProperties({
    name: "Rima",
    age: 24,
    city: "Zarqa"
}));



function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({
    name: "Rima",
    age: 24,
    city: "Zarqa"
}));



function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log(
    combineObjects(
        { name: "Rima", age: 24 },
        { city: "Zarqa", job: "Engineer" }
    )
);



function uppercaseValues(obj) {

    let newObject = {};

    for (let property in obj) {
        newObject[property] = String(obj[property]).toUpperCase();
    }

    return newObject;
}

console.log(
    uppercaseValues({
        name: "Rima",
        city: "Zarqa",
        job: "Engineer"
    })
);



function removeNullValues(obj) {

    let newObject = {};

    for (let property in obj) {

        if (obj[property] !== null) {
            newObject[property] = obj[property];
        }

    }

    return newObject;
}

console.log(
    removeNullValues({
        name: "Rima",
        age: null,
        city: "Zarqa",
        job: null
    })
);



function sortProperties(obj) {
    return Object.keys(obj).sort();
}

console.log(
    sortProperties({
        name: "Rima",
        city: "Zarqa",
        age: 24,
        job: "Engineer"
    })
);