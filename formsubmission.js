function contactValidation() {
    var contactFormObj = document.getElementById("contactForm");
    var name = contactFormObj.name.value.trim();
    var email = contactFormObj.email.value.trim();
    var message = contactFormObj.message.value.trim();
    var everythingOK = true;

    if (!validateName(name)) {
        alert("Error: Invalid Name.");
        everythingOK = false;
    }

    if (!validateEmail(email)) {
        alert("Error: Invalid Email Address.");
        everythingOK = false;
    }

    if (!validateMessage(message)) {
        alert("Error: Please enter a message.");
        everythingOK = false;
    }

    if (!contactFormObj.collect.checked) {
        alert("Please consent to the Privacy Policy.");
        everythingOK = false;
    }

    if (everythingOK) {
        alert("All the information looks good.\nThank you!");
    }

    return everythingOK;
}

function validateName(name) {
    var p = name.search(/^[-'\w\s]+$/); 
    if (p == 0) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    var p = email.search(/.+@.+/); 
    if (p == 0) {
        return true;
    } else {
        return false;
    }
}

function validateMessage(message) {
    if (message.length > 0) {
        return true;
    } else {
        return false;
    }
}

