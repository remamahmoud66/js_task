// 1
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));

// 2
function AlphabeticalOrder(str) {
  let arr = str.split("");
  arr.sort();
  return arr.join("");
}
console.log(AlphabeticalOrder('hello'));

// 3
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result = result * i;
  return result;
}
console.log(factorial(8));

// 4
function oddOrEven(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}
console.log(oddOrEven(9));

// 5
function addUp(num) {
  let total = 0;
  for (let count = num; count >= 0; count--) total = total + count;
  return total;
}
console.log(addUp(8));

// 6
function minMaxLengthAverage(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < min) min = numbers[index];
    if (numbers[index] > max) max = numbers[index];
    sum = sum + numbers[index];
  }
  let avg = sum / numbers.length;
  return [min, max, numbers.length, avg];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

// 7
function countWords(sentence) {
  let wordsArr = sentence.split(" ");
  return wordsArr.length;
}
console.log(countWords('hello from CodingAcademy!'));

// 8
function MultiplyByLength(list) {
  let len = list.length;
  let newList = [];
  for (let n = 0; n < list.length; n++) newList.push(list[n] * len);
  return newList;
}
console.log(MultiplyByLength([4, 2, 5]));

// 9
function checkEnding(firstStr, secondStr) {
  let firstLen = firstStr.length;
  let secondLen = secondStr.length;
  let ending = firstStr.slice(firstLen - secondLen, firstLen);
  return ending === secondStr;
}
console.log(checkEnding("CodingSchool", "Ac"));

// 10
function doubleChar(word) {
  let doubled = "";
  for (let pos = 0; pos < word.length; pos++) doubled = doubled + word[pos] + word[pos];
  return doubled;
}
console.log(doubleChar('Coding'));

// 11
function findIndex(arrList, target) {
  for (let j = 0; j < arrList.length; j++) {
    if (arrList[j] === target) return j;
  }
  return -1;
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));