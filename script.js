/* =====================================================
   SECRET CODE
===================================================== */

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

const gardenCreatures =
    document.getElementById("gardenCreatures");

const tulipGarden =
    document.getElementById("tulipGarden");

const videoModal =
    document.getElementById("videoModal");

const videoBackdrop =
    document.getElementById("videoBackdrop");

const closeVideo =
    document.getElementById("closeVideo");

const gardenVideo =
    document.getElementById("gardenVideo");

const videoSource =
    document.getElementById("videoSource");

const videoMessage =
    document.getElementById("videoMessage");


/* =====================================================
   STATE
===================================================== */

let enteredCode = "";

let isUnlocking = false;

let gardenStarted = false;


/* =====================================================
   KEYPAD
===================================================== */

const numberButtons =
    document.querySelectorAll(
        "[data-number]"
    );


numberButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            if (isUnlocking) {
                return;
            }

            const number =
                button.dataset.number;

            addNumber(number);

        }
    );

});


/* =====================================================
   ADD NUMBER
===================================================== */

function addNumber(number) {

    if (isUnlocking) {
        return;
    }


    if (
        enteredCode.length >=
        SECRET_CODE.length
    ) {
        return;
    }


    enteredCode += number;

    updateDisplay();


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


/* =====================================================
   UPDATE CODE DISPLAY
===================================================== */

function updateDisplay() {

    const dots =
        codeDisplay.querySelectorAll(
            "span"
        );


    dots.forEach(
        (dot, index) => {

            if (
                index <
                enteredCode.length
            ) {

                dot.classList.add(
                    "active"
                );

            } else {

                dot.classList.remove(
                    "active"
                );

            }

        }
    );

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


    lockArea.classList.remove(
        "shake"
    );


    void lockArea.offsetWidth;


    lockArea.classList.add(
        "shake"
    );


    instruction.textContent =
        "That's not the right key...";


    instruction.style.color =
        "#a34e32";


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


    lockScreen.classList.add(
        "unlocking"
    );


    createParticles();


    /* =================================================
       MESSAGE 1
    ================================================== */

    setTimeout(() => {

        unlockMessage.classList.add(
            "show-unlock-message"
        );

    }, 2500);


    /* =================================================
       MESSAGE 2
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


        particle.style.left =
            `calc(50% + ${random(-50, 50)}px)`;


        particle.style.top =
            `calc(40% + ${random(-50, 50)}px)`;


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


        const size =
            random(3, 7);


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particles.appendChild(
            particle
        );


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
   ENTER THE GARDEN
===================================================== */

enterWorld.addEventListener(
    "click",
    () => {

        if (gardenStarted) {
            return;
        }


        gardenStarted = true;


        enterWorld.textContent =
            "The garden is waking...";


        /*
            First reveal the flying creatures.
        */

        gardenCreatures.classList.add(
            "garden-active"
        );


        /*
            Give the button a tiny moment
            before the tulips appear.
        */

        setTimeout(() => {

            secretWorld.classList.remove(
                "visible"
            );


            setTimeout(() => {

                tulipGarden.classList.add(
                    "visible"
                );

            }, 700);

        }, 1200);

    }
);


/* =====================================================
   TULIP VIDEOS
===================================================== */

const tulips =
    document.querySelectorAll(
        ".tulip-card"
    );


tulips.forEach(tulip => {

    tulip.addEventListener(
        "click",
        () => {

            const video =
                tulip.dataset.video;

            const message =
                tulip.dataset.message;


            openVideo(
                video,
                message
            );

        }
    );

});


/* =====================================================
   OPEN VIDEO
===================================================== */

function openVideo(
    video,
    message
) {

    /*
        Change the video source.
    */

    videoSource.src =
        video;


    /*
        Reload the video element
        so the new video loads.
    */

    gardenVideo.load();


    /*
        Put the message underneath.
    */

    videoMessage.textContent =
        message;


    /*
        Show popup.
    */

    videoModal.classList.add(
        "show"
    );


    /*
        Stop page scrolling.
    */

    document.body.style.overflow =
        "hidden";


    /*
        Start video.
    */

    gardenVideo.play()
        .catch(() => {

            /*
                Some browsers require
                user interaction before
                autoplay.

                The controls are still available.
            */

        });

}


/* =====================================================
   CLOSE VIDEO
===================================================== */

function closeVideoModal() {

    gardenVideo.pause();

    gardenVideo.currentTime = 0;

    videoModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

closeVideo.addEventListener(
    "click",
    closeVideoModal
);


/* =====================================================
   CLICK BACKDROP TO CLOSE
===================================================== */

videoBackdrop.addEventListener(
    "click",
    closeVideoModal
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            videoModal.classList.contains(
                "show"
            )
        ) {

            closeVideoModal();

        }

    }
);