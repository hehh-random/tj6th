/* =====================================================
   SECRET CODE
===================================================== */

/*
    CHANGE THIS TO WHATEVER CODE YOU WANT.
*/

const SECRET_CODE = "1234";


/* =====================================================
   ELEMENTS
===================================================== */

const lockScreen =
    document.getElementById("lockScreen");

const lockArea =
    document.getElementById("lockArea");

const keypad =
    document.getElementById("keypad");

const codeDisplay =
    document.getElementById("codeDisplay");

const instruction =
    document.getElementById("instruction");

const heartLock =
    document.getElementById("heartLock");

const unlockMessage =
    document.getElementById("unlockMessage");

const comeInside =
    document.getElementById("comeInside");

const secretWorld =
    document.getElementById("secretWorld");

const enterWorld =
    document.getElementById("enterWorld");

const particles =
    document.getElementById("particles");


/* =====================================================
   STATE
===================================================== */

let enteredCode = "";

let isUnlocking = false;


/* =====================================================
   KEYPAD BUTTONS
===================================================== */

const numberButtons =
    document.querySelectorAll("[data-number]");


numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (isUnlocking) return;

        const number =
            button.dataset.number;

        addNumber(number);

    });

});


/* =====================================================
   ADD NUMBER
===================================================== */

function addNumber(number) {

    if (enteredCode.length >= SECRET_CODE.length) {
        return;
    }

    enteredCode += number;

    updateDisplay();


    /*
        Automatically check once the
        correct number of digits is entered.
    */

    if (enteredCode.length === SECRET_CODE.length) {

        setTimeout(checkCode, 250);

    }

}


/* =====================================================
   BACKSPACE
===================================================== */

document
    .getElementById("backspace")
    .addEventListener("click", () => {

        if (isUnlocking) return;

        enteredCode =
            enteredCode.slice(0, -1);

        updateDisplay();

    });


/* =====================================================
   DISPLAY DOTS
===================================================== */

function updateDisplay() {

    const dots =
        codeDisplay.querySelectorAll("span");

    dots.forEach((dot, index) => {

        if (index < enteredCode.length) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


/* =====================================================
   CHECK CODE
===================================================== */

function checkCode() {

    if (enteredCode === SECRET_CODE) {

        unlock();

    } else {

        wrongCode();

    }

}


/* =====================================================
   WRONG CODE
===================================================== */

function wrongCode() {

    lockArea.classList.remove("shake");

    /*
        Force browser to restart animation.
    */

    void lockArea.offsetWidth;

    lockArea.classList.add("shake");


    instruction.textContent =
        "That's not the right key...";


    instruction.style.color =
        "#a34e32";


    setTimeout(() => {

        enteredCode = "";

        updateDisplay();

        instruction.textContent =
            "Enter the secret code...";

        instruction.style.color =
            "";

    }, 900);

}


/* =====================================================
   UNLOCK
===================================================== */

function unlock() {

    if (isUnlocking) return;

    isUnlocking = true;


    /*
        Add the main unlocking class.
    */

    lockScreen.classList.add("unlocking");


    /*
        Create golden particles.
    */

    createParticles();


    /*
        First message:
        "You found the key."
    */

    setTimeout(() => {

        unlockMessage.classList.add(
            "show-unlock-message"
        );

    }, 2500);


    /*
        Second message:
        "Come inside..."
    */

    setTimeout(() => {

        comeInside.classList.add(
            "show-come-inside"
        );

    }, 5100);


    /*
        Finally reveal the actual
        secret world.
    */

    setTimeout(() => {

        secretWorld.classList.add(
            "visible"
        );

    }, 7600);

}


/* =====================================================
   GOLDEN PARTICLES
===================================================== */

function createParticles() {

    const amount = 70;


    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        /*
            Start around the lock.
        */

        particle.style.left =
            `calc(50% + ${random(-50, 50)}px)`;

        particle.style.top =
            `calc(40% + ${random(-50, 50)}px)`;


        /*
            Random direction.
        */

        particle.style.setProperty(
            "--x",
            `${random(-350, 350)}px`
        );

        particle.style.setProperty(
            "--y",
            `${random(-300, 250)}px`
        );


        particle.style.setProperty(
            "--duration",
            `${random(1.5, 3.5)}s`
        );


        /*
            Random particle size.
        */

        const size =
            random(3, 7);

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        particles.appendChild(
            particle
        );


        /*
            Remove after animation.
        */

        setTimeout(() => {

            particle.remove();

        }, 4000);

    }

}


/* =====================================================
   RANDOM NUMBER
===================================================== */

function random(min, max) {

    return Math.random() *
        (max - min) + min;

}


/* =====================================================
   ENTER WORLD
===================================================== */

enterWorld.addEventListener(
    "click",
    () => {

        /*
            THIS is where your actual
            website begins.

            For now we're just changing
            the text.

            Later you can connect this
            to your Memory Garden / Book /
            Letters / etc.
        */

        enterWorld.textContent =
            "The garden is waiting...";

    }
);