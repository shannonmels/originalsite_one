//function to assign input of user to variables, and run through a validation check
function emailValidation() {
    var contactFormObj = document.getElementById("newsLetter");
    var email = contactFormObj.email.value.trim();
    var everythingOK = true;

    if (!validateEmail(email)) {
        alert("Error: Invalid Email Address."); //Error pop up if validation email is wrong
        everythingOK = false; //Submission will not go through
    }
    if (everythingOK) {
        alert("Thank you for subscribing!"); //if information was correct a correlating pop up message appears
    }

    return everythingOK;
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
