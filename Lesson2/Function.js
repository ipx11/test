// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);


// let calc = function (a,b) {
//     return (a + b);
// }

// let calc = (a,b) => a+b

// console.log(calc(3,4));
// console.log(calc(5,4));

// function retVar() {
//     let num =50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function lernJs(lang, callback) {
//     console.log("Я учу" + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошел 3й урок!")
// }

// lernJs("JavaScript", done);

// let options = {
//     width: 1000,
//     height: 1000,
//     name: "test"
// };


// console.log(options.name);
// options.bools = true;
// options.colors = {
//     border: "red",
//     bg: "black"
// };

// delete options.bools;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " равен " + options[key]);
// }

// console.log(Object.keys(options).length);
// Массивы


// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", "zzz", "pp", "asd"],
//     i = arr.join(", ");

// console.log(i);
// let arr = [1,15,4],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }
// console.log(arr);

let solder = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = solder;

console.log(john);
console.log(john.armor);



