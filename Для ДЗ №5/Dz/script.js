'use strict';

let item = document.getElementsByClassName('menu-item'),
    rekl = document.getElementsByClassName('adv')[0],
    menu = document.getElementsByClassName('menu'),
    quest = document.getElementById('prompt'),
    pnk5 = document.createElement('li'),
    title = document.getElementById('title');
    
document.body.style.backgroundImage = "url('apple_true.jpg')";

title.textContent = 'Мы продаем только подленную технику Apple';

rekl.remove()

menu[0].insertBefore(item[2], item[1]);

menu[0].appendChild(pnk5);

pnk5.classList.add('menu-item');

pnk5.textContent = 'Пятый пункт';

let q1 = prompt('Ваше отношение к Apple?' + '');
quest.textContent = q1;