
//import React ,{Component} from 'react';

const validate = (value) => {
    const errors = {};

    if (!value.Name) { errors.Name = "Please Enter your Name..." }

    else if (value.Name.length > 15) { errors.Name = "Name should be of 15 characters..." }

   //  if(["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com"].includes(value.Email)) { errors.Email = "Email already exites" }

    if (!value.Age) { errors.Age = " please enter your Age... "}
    else if (isNaN(Number(value.Age))) { errors.Age = " It must be a number..." }

    return errors;
}

export default validate;
//---------------
