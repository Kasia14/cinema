const username = document.querySelector('.username');
const yourPassword = document.querySelector('.password');
const progress = document.querySelector('.myProgress');
const rePassword = document.querySelector('.re-password');
const telephone = document.querySelector('.telephone');
const zipCode = document.querySelector('.zipcode');
const info = document.querySelector('h4');
const btnSignUp = document.querySelector('.button');



// Sprawdzanie siły hasła

const calculateComplexity = function (password) {
    let complexity = 0;
    let regExps = [
        /.{8}/,
        /[!-//:-@[-`{-ÿ]/,
        /[0-9]/,
        /[a-z]/,
        /[A-Z]/
    ];

    regExps.forEach(function (regexp) {
        if (regexp.test(password)) {
            complexity++;
        }
    })
    return {
        value: complexity,
        max: regExps.length
    };

};


const checkPasswordStrength = function (password) {
    complexity = calculateComplexity(this.value);

    progress.value = complexity.value;
    progress.max = complexity.max;
}

// czy password i re-password są takie same?Czy password ma 8 znaków? 
// info pod ramkami że coś źle
const correctness = function (event) {
    let password = event.target;
    const numberofCharacters = /.{8}/;
    const zipCodeNumber = /^[0-9]{2}-[0-9]{3}$/;
    const telephoneNumber = /(\+48)+(0-9){9}/;
    if (yourPassword.value !== rePassword.value) {
        password.style.borderBottom = "1px solid red";
        rePassword.style.borderBottom = "1px solid red";
        info.innerText = 'Hasłą są różne!'
        //alert('Hasła są różne')
        btnSignUp.disabled = true;
    }
    if (password < numberofCharacters) {
        password.style.borderBottom = "1px solid red";
        rePassword.style.borderBottom = "1px solid red";
        info.innerHTML = `<h4>Hasło jest za krótkie! (Min. 8 znaków)<h4>`;
        btnSignUp.disabled = true;

    }
    if (zipCode !== zipCodeNumber) {
        zipCode.style.borderBottom = "1px solid red";
        info.innerHTML = `<h4>Nie poprawny format kodu pocztowego<h4>`;
        //alert('Nie poprawny format kodu pocztowego')
        btnSignUp.disabled = true;
    }
    if (telephone !== telephoneNumber) {
        telephone.style.borderBottom = "1px solid red";
        info.innerHTML = '<h4>Nie poprawny format telefonu</h4>';
       // alert("Niepoprawny format telefonu");
        btnSignUp.disabled = true;
    }
}


//zablokowanie przycisku sign up

const buttonActivity = function () {
    if (correctness == false) {
        btnSignUp[disabled = "true"];
    }
}

yourPassword.addEventListener('keyup', checkPasswordStrength);
yourPassword.addEventListener('keyup', correctness);
telephone.addEventListener('keyup', correctness);