let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');


function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}

// btn.addEventListener('click', myAnimation);                 

// let btnBlock = document.querySelector('.btn-block'),                    // Делегирование событий
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('Hello!');
//     }
// });

btn.addEventListener('click', myAnimation);                 

let btnBlock = document.querySelector('.btn-block'),                    // Делегирование событий
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button')) {
        console.log('Hello!');
    }
});