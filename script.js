/* =====================================================
   SECRET CODE
===================================================== */

/*
    CHANGE THIS TO WHATEVER CODE YOU WANT.
*/

const SECRET_CODE = "1234";


/* =====================================================
   ELEMENTS — LOCK SCREEN
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
   ELEMENTS — MAGICAL GARDEN
===================================================== */

const gardenCreatures =
    document.getElementById("gardenCreatures");

const secretCounter =
    document.getElementById("secretCounter");

const secretCount =
    document.getElementById("secretCount");

const creatureMessage =
    document.getElementById("creatureMessage");

const creatureMessageText =
    document.getElementById("creatureMessageText");


/* =====================================================
   STATE — LOCK
===================================================== */

let enteredCode = "";

let isUnlocking = false;


/* =====================================================
   STATE — GARDEN
===================================================== */

let secretsFound = 0;

let specialIndexes = [];


/* =====================================================
   SETTINGS — GARDEN
===================================================== */

const TOTAL_BUTTERFLIES = 10;

const TOTAL_FIREFLIES = 10;

const TOTAL_CREATURES =
    TOTAL_BUTTERFLIES +
    TOTAL_FIREFLIES;

const TOTAL_SPECIAL = 6;


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
   KEYPAD
===================================================== */

const numberButtons =
    document.querySelectorAll("[data-number]");


numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (isUnlocking) {
            return;
        }

        const number =
            button.dataset.number;

        addNumber(number);

    });

});


/* =====================================================
   ADD NUMBER
===================================================== */

function addNumber(number) {

    if (isUnlocking) {
        return;
    }


    /*
        Don't allow more digits than
        the secret code requires.
    */

    if (
        enteredCode.length >=
        SECRET_CODE.length
    ) {
        return;
    }


    enteredCode += number;

    updateDisplay();


    /*
        Automatically check the code
        when all digits have been entered.
    */

    if (
        enteredCode.length ===
        SECRET_CODE.length
    ) {

        setTimeout(() => {

            checkCode();

        }, 250);

    }

}


/* =====================================================
   BACKSPACE
===================================================== */

const backspace =
    document.getElementById("backspace");


if (backspace) {

    backspace.addEventListener(
        "click",
        () => {

            if (isUnlocking) {
                return;
            }

            enteredCode =
                enteredCode.slice(0, -1);

            updateDisplay();

        }
    );

}


/* =====================================================
   UPDATE CODE DISPLAY
===================================================== */

function updateDisplay() {

    const dots =
        codeDisplay.querySelectorAll("span");


    dots.forEach((dot, index) => {

        if (
            index <
            enteredCode.length
        ) {

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

    if (
        enteredCode ===
        SECRET_CODE
    ) {

        unlock();

    } else {

        wrongCode();

    }

}


/* =====================================================
   WRONG CODE
===================================================== */

function wrongCode() {

    if (isUnlocking) {
        return;
    }


    /*
        Restart shake animation.
    */

    lockArea.classList.remove("shake");

    void lockArea.offsetWidth;

    lockArea.classList.add("shake");


    /*
        Change instruction.
    */

    instruction.textContent =
        "That's not the right key...";

    instruction.style.color =
        "#a34e32";


    /*
        Reset after a short delay.
    */

    setTimeout(() => {

        enteredCode = "";

        updateDisplay();

        instruction.textContent =
            "Enter the secret code...";

        instruction.style.color = "";

    }, 900);

}


/* =====================================================
   UNLOCK
===================================================== */

function unlock() {

    if (isUnlocking) {
        return;
    }

    isUnlocking = true;


    /*
        Main unlocking animation.
    */

    lockScreen.classList.add(
        "unlocking"
    );


    /*
        Create magical golden particles.
    */

    createParticles();


    /* =================================================
       MESSAGE 1
       "You found the key."
    ================================================== */

    setTimeout(() => {

        unlockMessage.classList.add(
            "show-unlock-message"
        );

    }, 2500);


    /* =================================================
       MESSAGE 2
       "Come inside..."
    ================================================== */

    setTimeout(() => {

        comeInside.classList.add(
            "show-come-inside"
        );

    }, 5100);


    /* =================================================
       SECRET WORLD
    ================================================== */

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


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        /* ---------------------------------------------
           START POSITION
        --------------------------------------------- */

        particle.style.left =
            `calc(50% + ${random(-50, 50)}px)`;


        particle.style.top =
            `calc(40% + ${random(-50, 50)}px)`;


        /* ---------------------------------------------
           RANDOM DIRECTION
        --------------------------------------------- */

        particle.style.setProperty(
            "--x",
            `${random(-350, 350)}px`
        );


        particle.style.setProperty(
            "--y",
            `${random(-300, 250)}px`
        );


        /* ---------------------------------------------
           RANDOM SPEED
        --------------------------------------------- */

        particle.style.setProperty(
            "--duration",
            `${random(1.5, 3.5)}s`
        );


        /* ---------------------------------------------
           RANDOM SIZE
        --------------------------------------------- */

        const size =
            random(3, 7);


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particles.appendChild(
            particle
        );


        /* ---------------------------------------------
           REMOVE PARTICLE
        --------------------------------------------- */

        setTimeout(() => {

            particle.remove();

        }, 4000);

    }

}


/* =====================================================
   ENTER THE SECRET WORLD
===================================================== */

enterWorld.addEventListener(
    "click",
    () => {

        enterWorld.textContent =
            "The garden is waking...";


        /*
            Reveal the magical creatures.
        */

        gardenCreatures.classList.add(
            "garden-active"
        );

    }
);


/* =====================================================
   RANDOM NUMBER
===================================================== */

function random(min, max) {

    return Math.random() *
        (max - min) + min;

}


/* =====================================================
   CHOOSE SPECIAL CREATURES
===================================================== */

/*
    Randomly chooses 6 different creatures
    out of all 20 creatures.

    10 butterflies
    +
    10 fireflies
    =
    20 total

    Exactly 6 become secret creatures.
*/

function chooseSpecialCreatures(total) {

    const indexes = [];


    while (
        indexes.length <
        TOTAL_SPECIAL
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * total
            );


        if (
            !indexes.includes(
                randomIndex
            )
        ) {

            indexes.push(
                randomIndex
            );

        }

    }


    return indexes;

}


/* =====================================================
   CREATE MAGICAL GARDEN
===================================================== */

function createGardenCreatures() {


    /*
        Choose the 6 secret creatures
        before creating anything.
    */

    specialIndexes =
        chooseSpecialCreatures(
            TOTAL_CREATURES
        );


    let creatureIndex = 0;


    /* =================================================
       CREATE BUTTERFLIES
    ================================================== */

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


        /* ---------------------------------------------
           BODY
        --------------------------------------------- */

        const body =
            document.createElement("div");


        body.classList.add(
            "butterfly-body"
        );


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


        /* ---------------------------------------------
           ADD PARTS
        --------------------------------------------- */

        butterfly.appendChild(
            leftWing
        );


        butterfly.appendChild(
            rightWing
        );


        butterfly.appendChild(
            body
        );


        butterfly.appendChild(
            leftAntenna
        );


        butterfly.appendChild(
            rightAntenna
        );


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


        butterfly.style.setProperty(
            "--size",
            size
        );


        /* ---------------------------------------------
           SPECIAL CREATURE?
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


        /* ---------------------------------------------
           ADD TO GARDEN
        --------------------------------------------- */

        gardenCreatures.appendChild(
            butterfly
        );


        creatureIndex++;

    }


    /* =================================================
       CREATE FIREFLIES
    ================================================== */

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
           MOVEMENT SPEED
        --------------------------------------------- */

        firefly.style.setProperty(
            "--fly-duration",
            `${random(20, 34)}s`
        );


        /* ---------------------------------------------
           GLOW SPEED
        --------------------------------------------- */

        firefly.style.setProperty(
            "--glow-duration",
            `${random(1.8, 3.8)}s`
        );


        /* ---------------------------------------------
           ANIMATION DELAY
        --------------------------------------------- */

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
           SPECIAL CREATURE?
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


        /* ---------------------------------------------
           ADD TO GARDEN
        --------------------------------------------- */

        gardenCreatures.appendChild(
            firefly
        );


        creatureIndex++;

    }

}


/* =====================================================
   MAKE SPECIAL CREATURE
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
        Determine which secret message
        belongs to this creature.

        Example:

        first special creature  = message 0
        second special creature = message 1
        etc.
    */

    creature.dataset.messageIndex =
        specialIndexes.indexOf(
            creatureIndex
        );


    /* =================================================
       CLICK EVENT
    ================================================== */

    creature.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            /*
                Don't allow the same creature
                to be discovered twice.
            */

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

function revealSecret(creature, messageIndex) {

    if (secretsFound >= TOTAL_SPECIAL) {
        return;
    }

    /* ---------------------------------------------
       INCREASE COUNTER
    --------------------------------------------- */

    secretsFound++;

    secretCounter.textContent = secretsFound;


    /* ---------------------------------------------
       CREATURE DISAPPEARS
    --------------------------------------------- */

    creature.classList.add("creature-found");


    /* ---------------------------------------------
       GET MESSAGE
    --------------------------------------------- */

    const message =
        secretMessages[
            messageIndex % secretMessages.length
        ];


    /* ---------------------------------------------
       PUT MESSAGE ON SCREEN
    --------------------------------------------- */

    creatureMessageText.textContent = message;


    /* ---------------------------------------------
       SHOW MESSAGE
    --------------------------------------------- */

    creatureMessage.classList.remove("show");

    void creatureMessage.offsetWidth;

    creatureMessage.classList.add("show");


    /* ---------------------------------------------
       HIDE AFTER 3.8 SECONDS
    --------------------------------------------- */

    setTimeout(() => {

        creatureMessage.classList.remove("show");

    }, 3800);


    /* ---------------------------------------------
       ALL SIX FOUND
    --------------------------------------------- */

    if (secretsFound === TOTAL_SPECIAL) {

        setTimeout(() => {

            creatureMessageText.textContent =
                "You found all six little secrets... ✦";

            creatureMessage.classList.remove("show");

            void creatureMessage.offsetWidth;

            creatureMessage.classList.add("show");

        }, 4000);

    }
}


/* =====================================================
   ALL SIX SECRETS FOUND
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
   START GARDEN CREATURES
===================================================== */

/*
    Create them immediately.

    They remain invisible until:
    #gardenCreatures gets .garden-active
*/

createGardenCreatures();