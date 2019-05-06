// 'use strict';

// let money, time;

// function start() {
//         money = +prompt("Ваш бюджет на месяц?", "");
//         time = prompt("Введите дату в формате YYYY-MM-DD", "");

//         while(isNaN(money) || money == "" || money == null) {
//                 money = +prompt("Ваш бюджет на месяц?", "");
//         }
// }
// start();


// let appData = {
//         budget: money,
//         expenses: {},
//         optionalExpenses: {},
//         income: [],
//         timeData: time,
//         saving: true,
//         chooseExpenses: function() {
//                 for (let i = 0; i < 2; i++) {
//                         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                             b = prompt("Во сколько обойдется?", "");
                        
//                         if (( (typeof(a))=== 'string' && (typeof(a)) != null ) && (typeof(b)) != null 
//                                 && a != '' && b != '' && a.length < 50) {
//                                 console.log("done");
//                                 appData.expenses[a] = b;      
//                         } else {
//                                 i = i - 1;
//                         }
                
                    
//                 }    
//         },
//         detectDayBudget: function() {
//                 appData.moneyPerDay = (appData.budget / 30).toFixed(),
//                 alert("Ежедневный бюджет: " + appData.moneyPerDay);
//         },
//         detectLevel: function() {
//                 if (appData.moneyPerDay < 100) {
//                         console.log("Минимальный уровень достатка");
//                 } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
//                         console.log("Средный уровень достатка");
//                 } else if (appData.moneyPerDay > 2000) {
//                         console.log("Высокий уровень достатка");
//                 } else {
//                         console.log("Произошла ошибка");
//                 }
//         },
//         checkSavings: function() {
//                 if (appData.saving == true) {
//                         let save = +prompt("Какова сумма накоплений?"),
//                                 present = +prompt("Под какой процент?");
//                         appData.monthIncome = save/100/12*present;
//                         alert("Доход с вашего депозита " + appData.monthIncome) ;
//                         }
//         },
//         chooseOptExpenses: function() {
//                 for (let i = 1; i <= 3; i++) {
//                         let questionOptExpenses = prompt("Статья необязательных расходов?");
//                         appData.optionalExpenses[i] = questionOptExpenses;
//                         console.log(appData.optionalExpenses);
//                 }
//         },
//         chooseInome: function() { 
//                 let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

//                 if (typeof(items) != "string" || items == "" || typeof(items) == null) {
//                         console.log("Вы ввели некорректные данные или не ввели их вовсе");
//                 }else {
//                         appData.chooseInome = items.split(", ");
//                         appData.chooseInome.push(prompt("Может что-то еще?"));
//                         appData.chooseInome.sort();
//                 }
//                 appData.income.forEach(function (itemMassive, i) {
//                         alert("Способы доп. заработка: " + (i+1) + " - " + itemMassive);
//                 });
//         }
// };

// for (let key in appData) {
//         console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);
// }


// let ans = prompt('Введите ваше имя');

// let reg = /n/gi;
// console.log(reg.test(ans));
// // console.log(ans.search(reg)); serch - ищет только первое совпадение
// console.log(ans.match(reg));
// i - Флаг регистра ,Маленькая или большая буква
// g - Флаг глобальности что мы ищем не только первое но и все остальные
// m - Флаг многострочности

// \d -цыфра
// \w - words слова
// \s - spases пробелы

// let pass = prompt('Введите пароль');

// console.log(pass.replace(/./g, "*"));
// alert('12-45-21'.replace(/-/g, ":"));


// let ans = prompt('Введите число');

// let reg = /\d/g;

// console.log(ans.match(reg));

// let str = 'My name/ is R2D2';

// console.log(str.match(/ /i));

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello World!');
// }

// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 2000);
// });


