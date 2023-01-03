//MATTHEW MCNATT 1/2/2022
//REGEX FOR EMAIL FOUND FROM THIS LINK: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
//REGEX FOR PHONE NUMBR FOUND FROM THIS LINK: https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
import React from "react";

const validateUserName = (input: string) => {
    if (input.length < 5) {
        console.log("This is name: " + input)
        return "User name must be at least 5 characters";
    }
    if (input.length > 25) 
        return "User name can be no more than 25 characters";
    if(input.indexOf(' ')!=-1)
        return "no spaces allowed in username or password field";
    return "";
};

const validatePassword = (input: string) => {
    if (input.length < 5) {
        return "password must be at least 5 characters";
    }
    if (input.length > 25) 
        return "password can be no more than 25 characters";
    if(input.indexOf(' ')!=-1)
        return "no spaces allowed in username or password field";
    return "";
};

const validateEmail = (input: string) =>{
    var re = /\S+@\S+\.\S+/;
    if(!re.test(input))
        return "Email invalid";
    return "";
};

const validatePhoneNumber = (input: string) =>{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!re.test(input))
        return "Phone number invalid";
    return "";
};



export {validateUserName, validatePassword, validateEmail, validatePhoneNumber}