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

const gardenCreatures =
    document.getElementById("gardenCreatures");

const backspace =
    document.getElementById("backspace");

const tulipGarden =
    document.getElementById("tulipGarden");

const tulipCards =
    document.querySelectorAll(".tulip-card");

const tulipProgress =
    document.getElementById("tulipProgress");

const videoPopup =
    document.getElementById("videoPopup");

const memoryVideo =
    document.getElementById("memoryVideo");

const videoMessage =
    document.getElementById("videoMessage");

const closeVideo =
    document.getElementById("closeVideo");

const finalPage =
    document.getElementById("finalPage");


/* =====================================================
   STATE
===================================================== */

let enteredCode = "";

let isUnlocking = false;

let tulipsDiscovered = 0;

const discoveredTulips = new Set();

let currentTulip = -1;


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

        addNumber(
            button.dataset.number
        );

    });

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

        setTimeout(
            checkCode,
            250
        );

    }

}


/* =====================================================
   BACKSPACE
===================================================== */

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
   UPDATE CODE DOTS
===================================================== */

function updateDisplay() {

    const dots =
        codeDisplay.querySelectorAll("span");


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index < enteredCode.length
            );

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

    lockArea.classList.remove("shake");

    void lockArea.offsetWidth;

    lockArea.classList.add("shake");


    instruction.textContent =
        "That's not the right key...";

    instruction.classList.add(
        "wrong"
    );


    setTimeout(
        () => {

            enteredCode = "";

            updateDisplay();

            instruction.textContent =
                "Enter the secret code...";

            instruction.classList.remove(
                "wrong"
            );

        },
        900
    );

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


    /* First message */

    setTimeout(
        () => {

            unlockMessage.classList.add(
                "show"
            );

        },
        2500
    );


    /* Second message */

    setTimeout(
        () => {

            comeInside.classList.add(
                "show"
            );

        },
        5100
    );


    /* Secret world */

    setTimeout(
        () => {

            secretWorld.classList.add(
                "visible"
            );

        },
        7600
    );

}


/* =====================================================
   PARTICLES
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


        particle.className =
            "particle";


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


        setTimeout(
            () => {
                particle.remove();
            },
            4000
        );

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
   ENTER GARDEN
===================================================== */

enterWorld.addEventListener(
    "click",
    () => {

        enterWorld.disabled = true;

        enterWorld.textContent =
            "The garden is waking...";


        gardenCreatures.classList.add(
            "garden-active"
        );


        createGardenCreatures();


        setTimeout(
            () => {

                secretWorld.classList.remove(
                    "visible"
                );

                tulipGarden.classList.add(
                    "visible"
                );

            },
            1800
        );

    }
);


/* =====================================================
   CREATE GARDEN CREATURES
===================================================== */

function createGardenCreatures() {

    gardenCreatures.innerHTML = "";

    createButterflies();

    createFireflies();

}


/* =====================================================
   BUTTERFLIES
===================================================== */

function createButterflies() {

    const amount = 10;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const butterfly =
            document.createElement("div");


        butterfly.className =
            "butterfly";


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
            "--fly-duration",
            `${random(18, 30)}s`
        );


        butterfly.style.setProperty(
            "--delay",
            `${random(-30, 0)}s`
        );


        butterfly.style.setProperty(
            "--size",
            random(.75, 1.2)
        );


        const leftWing =
            document.createElement("div");

        leftWing.className =
            "butterfly-wing left";


        const rightWing =
            document.createElement("div");

        rightWing.className =
            "butterfly-wing right";


        const body =
            document.createElement("div");

        body.className =
            "butterfly-body";


        const leftAntenna =
            document.createElement("div");

        leftAntenna.className =
            "antenna left";


        const rightAntenna =
            document.createElement("div");

        rightAntenna.className =
            "antenna right";


        butterfly.appendChild(leftWing);
        butterfly.appendChild(rightWing);
        butterfly.appendChild(body);
        butterfly.appendChild(leftAntenna);
        butterfly.appendChild(rightAntenna);


        gardenCreatures.appendChild(
            butterfly
        );

    }

}


/* =====================================================
   FIREFLIES
===================================================== */

function createFireflies() {

    const amount = 12;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const firefly =
            document.createElement("div");


        firefly.className =
            "firefly";


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


        firefly.style.transform =
            `scale(${random(.8, 1.35)})`;


        gardenCreatures.appendChild(
            firefly
        );

    }

}


/* =====================================================
   TULIP CLICK
===================================================== */

tulipCards.forEach(
    (tulip, index) => {

        tulip.addEventListener(
            "click",
            () => {

                openVideo(
                    index
                );

            }
        );

    }
);


/* =====================================================
   OPEN VIDEO
===================================================== */

function openVideo(index) {

    currentTulip = index;


    const videoFile =
        tulipCards[index].dataset.video;


    const message =
        tulipCards[index].dataset.message;


    /* Load video */

    memoryVideo.src =
        "./" + videoFile;

    memoryVideo.load();


    /* Message */

    videoMessage.textContent =
        message;


    /* Show popup */

    videoPopup.classList.add(
        "show"
    );


    /* Mark discovered */

    if (
        !discoveredTulips.has(index)
    ) {

        discoveredTulips.add(index);

        tulipsDiscovered++;


        tulipCards[index].classList.add(
            "discovered"
        );


        tulipProgress.textContent =
            `${tulipsDiscovered} / 6 discovered`;

    }


    /* Play */

    memoryVideo.play().catch(
        () => {
            /* User can press play manually */
        }
    );

}


/* =====================================================
   VIDEO ENDED
===================================================== */

memoryVideo.addEventListener(
    "ended",
    () => {

        if (
            tulipsDiscovered === 6
        ) {

            setTimeout(
                () => {

                    closeMemoryVideo();

                },
                1000
            );

        }

    }
);


/* =====================================================
   CLOSE VIDEO
===================================================== */

closeVideo.addEventListener(
    "click",
    closeMemoryVideo
);


/* =====================================================
   CLICK OUTSIDE VIDEO
===================================================== */

videoPopup.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            videoPopup
        ) {

            closeMemoryVideo();

        }

    }
);


/* =====================================================
   CLOSE VIDEO FUNCTION
===================================================== */

function closeMemoryVideo() {

    memoryVideo.pause();

    memoryVideo.currentTime = 0;

    memoryVideo.removeAttribute(
        "src"
    );

    memoryVideo.load();


    videoPopup.classList.remove(
        "show"
    );


    currentTulip = -1;


    /* Show final page */

    if (
        tulipsDiscovered === 6
    ) {

        setTimeout(
            showFinalPage,
            700
        );

    }

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            videoPopup.classList.contains("show")
        ) {

            closeMemoryVideo();

        }

    }
);


/* =====================================================
   FINAL PAGE
===================================================== */

function showFinalPage() {

    tulipGarden.classList.remove(
        "visible"
    );

    gardenCreatures.classList.remove(
        "garden-active"
    );


    finalPage.classList.add(
        "visible"
    );

}