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
const correctnessPassword = function (event)  {
    let password = event.target;
   
   
    if ( password.value.length < 8) {
        password.style.borderBottom = "1px solid red";
        rePassword.style.borderBottom = "1px solid red";
        info.innerHTML = `Hasło jest za krótkie! (Min. 8 znaków)`;
        btnSignUp.disabled = true;

    }
    else if (yourPassword.value !== rePassword.value) {
        password.style.borderBottom = "1px solid red";
        rePassword.style.borderBottom = "1px solid red";
        info.innerText = 'Hasłą są różne!'
        //alert('Hasła są różne')
        btnSignUp.disabled = true;
    }else {
        btnSignUp.disabled  = false;
        info.innerHTML = '';
        rePassword.style.borderBottom = "1px solid white";
        password.style.borderBottom = "1px solid white";
    }
}
  const corectnessZipCode = function(event) {
      let zipCode = event.target;
    const zipCodeNumber = /^[0-9]{2}-[0-9]{3}$/;
    if (zipCodeNumber.test(zipCode.value) == false) {
        zipCode.style.borderBottom = "1px solid red";
        info.innerHTML = `<h4>Nie poprawny format kodu pocztowego(XX-XXX)<h4>`;
        //alert('Nie poprawny format kodu pocztowego')
        btnSignUp.disabled = true;
    }
    else {
        btnSignUp.disabled  = false;
        info.innerHTML = '';
        zipCode.style.borderBottom = "1px solid white";
    }
}
const corectnessTelephone = function(event) {
    const telephoneNumber = /^\+48\d{9}$/;
    let telephone = event.target;
    if (telephoneNumber.test(telephone.value) == false) {
        telephone.style.borderBottom = "1px solid red";
        info.innerHTML = '<h4>Nie poprawny format telefonu (+48XXXXXXXXX)</h4>';
       // alert("Niepoprawny format telefonu");
        btnSignUp.disabled = true;
    }
    else {
        btnSignUp.disabled  = false;
        info.innerHTML = '';
        telephone.style.borderBottom = "1px solid white";
    }
}




yourPassword.addEventListener('keyup', checkPasswordStrength);
yourPassword.addEventListener('keyup', correctnessPassword);
telephone.addEventListener('keyup', corectnessTelephone);
zipCode.addEventListener('keyup', corectnessZipCode);