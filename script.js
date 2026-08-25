/* =========================================
   PASSWORD SETTINGS
========================================= */

/*
   CHANGE THIS TO WHATEVER PASSWORD YOU WANT.

   Example:
   "1234"
*/

const correctPassword = "1234";


/* =========================================
   VARIABLES
========================================= */

let enteredPassword = "";


/* Get elements */

const keys = document.querySelectorAll(".key[data-number]");

const deleteButton = document.getElementById("deleteButton");

const dots = document.querySelectorAll("#passwordDots span");

const successScreen = document.getElementById("successScreen");

const continueButton = document.getElementById("continueButton");


/* =========================================
   UPDATE PASSWORD DOTS
========================================= */

function updateDots() {

    dots.forEach((dot, index) => {

        if (index < enteredPassword.length) {

            dot.style.opacity = "1";

            dot.style.transform = "scale(1.15)";

        } else {

            dot.style.opacity = "0.35";

            dot.style.transform = "scale(1)";

        }

    });

}


/* =========================================
   ADD NUMBER
========================================= */

function addNumber(number) {

    /*
       Don't allow more digits than
       the password length.
    */

    if (enteredPassword.length >= correctPassword.length) {
        return;
    }


    enteredPassword += number;


    updateDots();


    /*
       Automatically check password
       when all digits have been entered.
    */

    if (enteredPassword.length === correctPassword.length) {

        setTimeout(checkPassword, 200);

    }

}


/* =========================================
   CHECK PASSWORD
========================================= */

function checkPassword() {

    if (enteredPassword === correctPassword) {

        /*
           Correct password
        */

        successScreen.classList.add("show");

    } else {

        /*
           Wrong password
        */

        shakePassword();

        setTimeout(() => {

            enteredPassword = "";

            updateDots();

        }, 500);

    }

}


/* =========================================
   WRONG PASSWORD ANIMATION
========================================= */

function shakePassword() {

    const keypad = document.querySelector(".keypad");

    keypad.animate(

        [
            {
                transform: "translateX(-50%)"
            },

            {
                transform: "translateX(calc(-50% - 10px))"
            },

            {
                transform: "translateX(calc(-50% + 10px))"
            },

            {
                transform: "translateX(calc(-50% - 7px))"
            },

            {
                transform: "translateX(calc(-50% + 7px))"
            },

            {
                transform: "translateX(-50%)"
            }
        ],

        {
            duration: 350,

            easing: "ease-in-out"
        }

    );

}


/* =========================================
   NUMBER BUTTONS
========================================= */

keys.forEach(key => {

    key.addEventListener("click", () => {

        const number = key.dataset.number;

        addNumber(number);

    });

});


/* =========================================
   DELETE BUTTON
========================================= */

deleteButton.addEventListener("click", () => {

    if (enteredPassword.length > 0) {

        enteredPassword =
            enteredPassword.slice(0, -1);

        updateDots();

    }

});


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", event => {

    /*
       Number keys
    */

    if (/^[0-9]$/.test(event.key)) {

        addNumber(event.key);

    }


    /*
       Backspace
    */

    if (event.key === "Backspace") {

        if (enteredPassword.length > 0) {

            enteredPassword =
                enteredPassword.slice(0, -1);

            updateDots();

        }

    }

});


/* =========================================
   CONTINUE
========================================= */

continueButton.addEventListener("click", () => {

    /*
       Put whatever you want to happen
       after the correct password here.
    */

    window.location.href = "home.html";

});