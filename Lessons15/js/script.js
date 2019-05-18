// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById("UserRememberMe"),
        change = document.getElementById('btn'),
        form = document.getElementById('UserLoginForm');

    if (localStorage.getItem('isChecked') === "true") {
        checkbox.checked = true;
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = "#FF4766";
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "#FF4766";
    });

    let persone = {
        name: "Pop",
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Pop', serializedPersone);

    console.log(JSON.parse(localStorage.getItem('Pop')));

});