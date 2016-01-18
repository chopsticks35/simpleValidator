var phoneNumber = window.prompt("Please enter your phone number, separated by dashes XXX-XXX-XXXX");

if (phoneNumber.charAt(3) === '-' 
    && phoneNumber.charAt(7) === '-' 
    && phoneNumber.length === 12) {
    
    alert("You entered correctly!");
}

else {
    
    alert("WRONG!  Please try again");
    var phoneNumber = window.prompt("Please enter your phone number, separated by dashes XXX-XXX-XXXX");
    if (phoneNumber.charAt(3) === '-' 
        && phoneNumber.charAt(7) === '-' 
        && phoneNumber.length === 12) {
    
    alert("You entered correctly!");
    }
}

var birthdate = window.prompt("Please enter your date of birth with the following format: XX/XX/XX");

if (birthdate.charAt(2) === '/' 
    && birthdate.charAt(5) === '/' 
    && birthdate.length === 8) {
    
    alert("Correctly entereed!");
}

var postalCode = window.prompt("Please enter your postal code as XXXXX or XXXXX-XXXXX");

if (postalCode.length === 5 || postalCode.charAt(5) === '-') {
    
    alert("Correct again!");
}

var stateCode = window.prompt("Please enter your state in two-character, all caps format.  Example: CO");

if (stateCode.length === 2 && stateCode === stateCode.toUpperCase()) {
    
    alert("Correctly entered");
}
var married = window.prompt("Are you married?  Please anser yes or no:");

