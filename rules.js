// There are fewer ways to pick a DOM node with legacy browsers
const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const ucountry = document.getElementById('country');
const uzip = document.getElementById('zip');
const passid = document.getElementById('passid');
const passid_confirm = document.getElementById('confirm-password');

// 6-20 characters, at least one numeric digit, one uppercase/lowercase
const passStrength = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const zipCheck = /^\d{5}$/;

// passid.setAttribute('pattern', passStrength);
// uzip.setAttribute('pattern', zipCheck)

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
    } else {
        email.setCustomValidity("");
    }
});

passid.addEventListener("input", () => {
    if (passid.value !== passStrength) {
        passid.setCustomValidity("Weak password strength, have at least 1 digit/uppercase!");
    } else {
        passid.setCustomValidity("");
    }
})

uzip.addEventListener("input", () => {
    if (zipCheck.test(uzip)) {
        uzip.setCustomValidity("");
    } else {
        uzip.setCustomValidity('Please enter your ZIP code.');
    }
})




function passid_validation(passid,mx,my) {
    const passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}

function passid_match(passid,confirm_passid) {
    return (passid === confirm_passid);
}

function countryselect(ucountry) {
    if(ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
    return false;
    } else {
        return true;
    }
};

function allnumeric(uzip) {
    const numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)) {
        return true;
    } else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
};

function ValidateEmail(uemail) {
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
