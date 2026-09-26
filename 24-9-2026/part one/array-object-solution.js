const person = { name: "Adam", age: 25, gender: "male" };
console.log(person.name, person.age, person.gender);

const user = { name: "Adam", age: 25 };
user.gender = "male";
console.log(user);

const student = { name: "Adam", age: 25 };
console.log(student.name);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num);
});

const fruits = ["banana", "cherry", "apple"];
fruits.sort();
console.log(fruits);

const fruitsToReverse = ["apple", "banana", "cherry"];
fruitsToReverse.reverse();
console.log(fruitsToReverse);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined);

const sliceArr = [1, 2, 3, 4, 5, 6];
const part = sliceArr.slice(2, 4);
console.log(part);

const spliceArr = [1, 2, 3, 4, 5, 6];
const removed = spliceArr.splice(2, 2);
console.log(spliceArr);
console.log(removed);
spliceArr.splice(2, 0, 3, 4);
console.log(spliceArr);

const indexArr = [1, 2, 3, 4, 5];
console.log(indexArr.indexOf(3));

const joinArr = [1, 2, 3, 4, 5];
const joined = joinArr.join(",");
console.log(joined);

const str = "1,2,3,4,5";
const splitArr = str.split(",").map(Number);
console.log(splitArr);

const lengthArr = [1, 2, 3, 4, 5];
console.log(lengthArr.length);

const loopArr = [1, 2, 3, 4, 5];
for (const item of loopArr) {
  console.log(item);
}

const checkArr = [1, 2, 3, 4, 5];
console.log(Array.isArray(checkArr));
console.log(Array.isArray(person));
