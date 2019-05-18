$(document).ready(function() {
    $('.main_btn').add('.main_btna').add('li:contains("расписания туров")').on('click', function() {
        $('.modal').slideDown();
        $('.overlay').fadeToggle();
        
    });
    $('.close').on('click', function() {
        $('.modal').slideUp();
        $('.overlay').fadeToggle();
    });
});