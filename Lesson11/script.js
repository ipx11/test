

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this);
//         }
//         say();
//     }
// };
// obj.sayNumber();

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     }
//     show();
// });

// function calcOrDuble(number, basis = 2) {
//     // basis = basis || 2; ES5 
//     console.log(number * basis);
// }

// calcOrDuble(3,6);
// calcOrDuble(6);

// class Rectengle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;

//     }
//     calcArea(){
//         return this.height * this.width;
//     }
// }

// const square = new Rectengle(10);

// console.log(square.calcArea());

// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejurnal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];


// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a + b + c);

// }

// let numbers = [2, 5, 7];

// log(...numbers)

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
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }   
}

const item = new Options(300, 350, 'black', 14, 'center');

item.createDiv();