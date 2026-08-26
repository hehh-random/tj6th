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

        enterWorld.textContent =
            "The garden is waking...";

        gardenCreatures.classList.add(
            "garden-active"
        );

    }
);


/* =====================================================
   MAGICAL GARDEN CREATURES
===================================================== */


/* =====================================================
   SETTINGS
===================================================== */

const TOTAL_BUTTERFLIES = 10;
const TOTAL_FIREFLIES = 10;

const TOTAL_SPECIAL = 6;


/* =====================================================
   ELEMENTS
===================================================== */

const gardenCreatures =
    document.getElementById("gardenCreatures");

const secretCounter =
    document.getElementById("secretCount");

const creatureMessage =
    document.getElementById("creatureMessage");

const creatureMessageText =
    document.getElementById("creatureMessageText");


/* =====================================================
   SECRET MESSAGES
===================================================== */

const secretMessages = [

    "A tiny reminder that you're special. ✦",

    "Some little moments deserve to be remembered forever.",

    "If this little light found you, maybe you needed it today.",

    "There are beautiful things hiding in the smallest moments.",

    "Keep this little secret somewhere in your heart. ♡",

    "You found something that wasn't meant to be found easily."

];


/* =====================================================
   STATE
===================================================== */

let secretsFound = 0;

let specialIndexes = [];


/* =====================================================
   CHOOSE 6 RANDOM SPECIAL CREATURES
===================================================== */

function chooseSpecialCreatures(total) {

    const indexes = [];

    while (indexes.length < TOTAL_SPECIAL) {

        const randomIndex =
            Math.floor(Math.random() * total);

        if (!indexes.includes(randomIndex)) {

            indexes.push(randomIndex);

        }

    }

    return indexes;
}


/* =====================================================
   CREATE CREATURES
===================================================== */

function createGardenCreatures() {

    const totalCreatures =
        TOTAL_BUTTERFLIES +
        TOTAL_FIREFLIES;


    specialIndexes =
        chooseSpecialCreatures(totalCreatures);


    let creatureIndex = 0;


    /* =================================================
       BUTTERFLIES
    ================================================= */

    for (
        let i = 0;
        i < TOTAL_BUTTERFLIES;
        i++
    ) {

        const butterfly =
            document.createElement("div");


        butterfly.classList.add(
            "butterfly"
        );


        /* ---------------------------------------------
           WINGS
        --------------------------------------------- */

        const leftWing =
            document.createElement("div");

        leftWing.classList.add(
            "butterfly-wing",
            "left"
        );


        const rightWing =
            document.createElement("div");

        rightWing.classList.add(
            "butterfly-wing",
            "right"
        );


        butterfly.appendChild(leftWing);
        butterfly.appendChild(rightWing);


        /* ---------------------------------------------
           ANTENNAE
        --------------------------------------------- */

        const leftAntenna =
            document.createElement("div");

        leftAntenna.classList.add(
            "antenna",
            "left"
        );


        const rightAntenna =
            document.createElement("div");

        rightAntenna.classList.add(
            "antenna",
            "right"
        );


        butterfly.appendChild(leftAntenna);
        butterfly.appendChild(rightAntenna);


        /* ---------------------------------------------
           POSITION
        --------------------------------------------- */

        butterfly.style.top =
            `${random(8, 88)}%`;


        butterfly.style.setProperty(
            "--start-y",
            `${random(-80, 80)}px`
        );


        butterfly.style.setProperty(
            "--end-y",
            `${random(-100, 100)}px`
        );


        butterfly.style.setProperty(
            "--angle",
            `${random(-10, 10)}deg`
        );


        /* ---------------------------------------------
           FLIGHT SPEED
        --------------------------------------------- */

        butterfly.style.setProperty(
            "--fly-duration",
            `${random(18, 30)}s`
        );


        butterfly.style.setProperty(
            "--delay",
            `${random(-30, 0)}s`
        );


        /* ---------------------------------------------
           RANDOM SIZE
        --------------------------------------------- */

        const size =
            random(.75, 1.2);

        butterfly.style.scale =
            size;


        /* ---------------------------------------------
           SPECIAL?
        --------------------------------------------- */

        if (
            specialIndexes.includes(
                creatureIndex
            )
        ) {

            makeSpecial(
                butterfly,
                creatureIndex
            );

        }


        gardenCreatures.appendChild(
            butterfly
        );


        creatureIndex++;

    }


    /* =================================================
       FIREFLIES
    ================================================= */

    for (
        let i = 0;
        i < TOTAL_FIREFLIES;
        i++
    ) {

        const firefly =
            document.createElement("div");


        firefly.classList.add(
            "firefly"
        );


        /* ---------------------------------------------
           POSITION
        --------------------------------------------- */

        firefly.style.top =
            `${random(12, 92)}%`;


        firefly.style.setProperty(
            "--start-y",
            `${random(-80, 80)}px`
        );


        firefly.style.setProperty(
            "--end-y",
            `${random(-120, 120)}px`
        );


        /* ---------------------------------------------
           MOVEMENT
        --------------------------------------------- */

        firefly.style.setProperty(
            "--fly-duration",
            `${random(20, 34)}s`
        );


        firefly.style.setProperty(
            "--glow-duration",
            `${random(1.8, 3.8)}s`
        );


        firefly.style.setProperty(
            "--delay",
            `${random(-35, 0)}s`
        );


        /* ---------------------------------------------
           RANDOM SIZE
        --------------------------------------------- */

        const size =
            random(.8, 1.35);

        firefly.style.scale =
            size;


        /* ---------------------------------------------
           SPECIAL?
        --------------------------------------------- */

        if (
            specialIndexes.includes(
                creatureIndex
            )
        ) {

            makeSpecial(
                firefly,
                creatureIndex
            );

        }


        gardenCreatures.appendChild(
            firefly
        );


        creatureIndex++;

    }

}


/* =====================================================
   MAKE SPECIAL
===================================================== */

function makeSpecial(
    creature,
    creatureIndex
) {

    creature.classList.add(
        "special-creature"
    );


    creature.dataset.special =
        "true";


    /*
       Each special creature gets its own
       message instead of using secretsFound.
    */

    creature.dataset.messageIndex =
        specialIndexes.indexOf(
            creatureIndex
        );


    /* =================================================
       CLICK
    ================================================= */

    creature.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            if (
                creature.classList.contains(
                    "creature-found"
                )
            ) {

                return;

            }


            revealSecret(
                creature,
                Number(
                    creature.dataset.messageIndex
                )
            );

        }
    );

}


/* =====================================================
   REVEAL SECRET
===================================================== */

function revealSecret(
    creature,
    messageIndex
) {

    if (
        secretsFound >= TOTAL_SPECIAL
    ) {

        return;

    }


    /* ---------------------------------------------
       INCREASE COUNTER
    --------------------------------------------- */

    secretsFound++;


    secretCounter.textContent =
        secretsFound;


    /* ---------------------------------------------
       CREATURE DISCOVERED
    --------------------------------------------- */

    creature.classList.add(
        "creature-found"
    );


    /* ---------------------------------------------
       MESSAGE
    --------------------------------------------- */

    const message =
        secretMessages[
            messageIndex %
            secretMessages.length
        ];


    creatureMessageText.textContent =
        message;


    /* ---------------------------------------------
       RESTART MESSAGE ANIMATION
    --------------------------------------------- */

    creatureMessage.classList.remove(
        "show"
    );


    void creatureMessage.offsetWidth;


    creatureMessage.classList.add(
        "show"
    );


    /* ---------------------------------------------
       ALL SIX FOUND
    --------------------------------------------- */

    if (
        secretsFound === TOTAL_SPECIAL
    ) {

        setTimeout(
            allSecretsFound,
            4000
        );

    }

}


/* =====================================================
   ALL SECRETS FOUND
===================================================== */

function allSecretsFound() {

    creatureMessageText.textContent =
        "You found all six little secrets... ✦";


    creatureMessage.classList.remove(
        "show"
    );


    void creatureMessage.offsetWidth;


    creatureMessage.classList.add(
        "show"
    );

}


/* =====================================================
   START CREATURES
===================================================== */

createGardenCreatures();



