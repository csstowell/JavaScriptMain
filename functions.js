"use strict";


// 1. isHometown

// Define your function here
// def is_hometown(town):
//     """Given a `town`, return `True` if `town` is 'San Francisco'.

//     Arguments:
//         town (str): A town

//     Returns:
//         bool: True if `town` is 'San Francisco'
//     """

//     return town == 'San Francisco'
function isHomeTown(town) {
    // if (town === 'San Francisco'){
    //     return True
    // }
    // else{
    //     return False
    // }

    return town === 'San Francisco'
}

function getFullName(first_name, last_name) {
    return `${first_name}  ${last_name}`;
}


// Define your function here


// 3. calculateTotal
// subtotal = base_price * (1 + tax)

//     fee = 0
//     if state == 'CA':
//         fee = 0.03 * subtotal
//     elif state == 'PA':
//         fee = 2
//     elif state == 'MA':
//         if base_price <= 100:
//             fee = 1
//         else:
//             fee = 3

//     return subtotal + fee

// Define your function here 
function calculate_total(base_price, state, tax = 0.05){

    const subtotal = base_price * (1 + tax);
    let fee = 0;

    if (state === 'CA'){
        fee = 0.03 * subtotal;
    } 
    else if (state === 'PA'){
        fee = 2;
    }
    else if (state === 'MA'){
        if (base_price <= 100){
            fee = 1;
        }
        else{
            fee = 3;
        }
    
    }
    return subtotal + fee;
}