var phoneNumber = window.prompt("Please enter your phone number, separated by dashes XXX-XXX-XXXX");

if (phoneNumber.charAt(3) === '-' 
    && phoneNumber.charAt(7) === '-' 
    && phoneNumber.length === 12) {
    
    alert("You entered correctly!")
}

else {
    
    alert("WRONG!  Please try again")
    var phoneNumber = window.prompt("Please enter your phone number, separated by dashes XXX-XXX-XXXX");
    if (phoneNumber.charAt(3) === '-' 
        && phoneNumber.charAt(7) === '-' 
        && phoneNumber.length === 12) {
    
    alert("You entered correctly!")
}


}