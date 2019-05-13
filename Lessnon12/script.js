// let name = "Ivan",
//     age = 30,
//     mail = "ex@mail.ru";

// document.write(`Пользывателю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// function makeArry() {
//     var items = [];

//     for (let i = 0; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArry();

// arr[1]();
// arr[3]();
// arr[7]();

// let fun = () => {
//     console.log(this);
// };

// // fun();

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this)
//         };
//         say();
//     }
// };

// obj.sayNumber();

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     };
//     show()
// });

// function calcOrDouble(number, basis = 2) {
//     // basis = basis || 2; ES5
//     console.log(number*basis);
// }
// calcOrDouble(3,5);
// calcOrDouble(6);

// class Rectangel {
//     constructor(hight, width = 20) {
//         this.hight = hight;
//         this.width = width;
//     }
//     calcArea() {
//         return this.hight * this.width;
//     }
// }

// const square = new Rectangel(10);

// console.log(square.calcArea());

// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a + b + c);
// }

// let numbers = [2, 5, 7];

// log(...numbers);


class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size${this.fontSize}; text-align${this.textAlign};`
        elem.style.cssText = param;
    }

}

let square = new Options(200, 700, 'green', 12, 'center');

square.createDiv();