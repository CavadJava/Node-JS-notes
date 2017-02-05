var numbers=[];
numbers[0]=11;
numbers[1]=21;
numbers[2]=31;

console.log(numbers);

var alphabet=[];
alphabet[0]=0;
alphabet[1]="A";
alphabet[2]="B";
alphabet[3]="C";

console.log(alphabet);

var number1 = new Array();
number1[0] = "000";
number1[1] = 111;
console.log(number1);

var number2 = new Array();
number2.push("first");
number2.push("second");
console.log(number2);

var number3 = new Array();
number3.unshift("first-1");
number3.unshift("second-2");
console.log(number3);

console.log("Before - push");
number3.push("third-3");
console.log(number3);
console.log("After - pop");
number3.pop("first-1");
console.log(number3);
console.log("After - shift");
number3.shift();
console.log(number3);
console.log("After - push");
number3.push("One-1");
number3.push("Two-2");
console.log(number3);
console.log("After - splice");
number3.splice(2,1);
console.log(number3);

