function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restdays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(restdays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }

        });

        restdays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if (restdays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }

        });

        place.addEventListener('change', function() {
            if (restdays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
}

module.exports = calc;