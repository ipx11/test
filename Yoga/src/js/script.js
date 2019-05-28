require('nodelist-foreach-polyfill');
require('formdata-polyfill');
// require('es6-promise').polyfill();


window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    let calc = require('./parts/calc.js'),
        form_old = require('./parts/form_old.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calc();
    form_old();
    slider();
    tabs();
    timer();
    modal();
});
