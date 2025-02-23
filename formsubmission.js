//function to assign input of user to variables, and run through a validation check
function contactValidation() {
    var contactFormObj = document.getElementById("contactForm");
    var name = contactFormObj.name.value.trim();
    var email = contactFormObj.email.value.trim();
    var message = contactFormObj.message.value.trim();
    var everythingOK = true;

    if (!validateName(name)) {
        alert("Error: Invalid Name."); //Error pop up if validation name is wrong
        everythingOK = false; //Submission will not go through
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
        alert("All the information looks good.\nThank you!"); //if all information was correct a correlating pop up message appears
    }

    return everythingOK;
}

//ensures a valid name is entered, without unrelated symbols
function validateName(name) {
    var p = name.search(/^[-'\w\s]+$/); 
    if (p == 0) {
        return true;
    } else {
        return false;
    }
}

//ensures an email address is entered (check for @)
function validateEmail(email) {
    var p = email.search(/.+@.+/); 
    if (p == 0) {
        return true;
    } else {
        return false;
    }
}

//ensures the message is not empty
function validateMessage(message) {
    if (message.length > 0) {
        return true;
    } else {
        return false;
    }
}

