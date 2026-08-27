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

const gardenPage =
    document.getElementById("gardenPage");

const gardenCreatures =
    document.getElementById("gardenCreatures");

const tulipContainer =
    document.getElementById("tulipContainer");

const tulipInstruction =
    document.getElementById("tulipInstruction");

const videoOverlay =
    document.getElementById("videoOverlay");

const secretVideo =
    document.getElementById("secretVideo");

const videoSource =
    document.getElementById("videoSource");

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

let videosWatched = 0;

let currentVideo = 0;


/* =====================================================
   VIDEO INFORMATION
===================================================== */

const tulips = [

    {
        image: "tulip1.png",
        video: "video1.mp4",
        message:
            "A little moment, just for you. ♡"
    },

    {
        image: "tulip2.png",
        video: "video2.mp4",
        message:
            "I hope this makes you smile. ✦"
    },

    {
        image: "tulip3.png",
        video: "video3.mp4",
        message:
            "Some memories deserve their own little place."
    },

    {
        image: "tulip4.png",
        video: "video4.mp4",
        message:
            "Here's another little piece of this secret garden. ♡"
    },

    {
        image: "tulip5.png",
        video: "video5.mp4",
        message:
            "Keep this one close to your heart. ✦"
    },

    {
        image: "tulip6.png",
        video: "video6.mp4",
        message:
            "And one last little surprise..."
    }

];


/* =====================================================
   KEYPAD
===================================================== */

const numberButtons =
    document.querySelectorAll("[data-number]");


numberButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            if (isUnlocking) {
                return;
            }

            addNumber(
                button.dataset.number
            );

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

        setTimeout(
            checkCode,
            250
        );

    }

}


/* =====================================================
   BACKSPACE
===================================================== */

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
   UPDATE DISPLAY
===================================================== */

function updateDisplay() {

    const dots =
        codeDisplay.querySelectorAll("span");


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


    setTimeout(
        () => {

            enteredCode = "";

            updateDisplay();

            instruction.textContent =
                "Enter the secret code...";

            instruction.style.color = "";

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


    setTimeout(
        () => {

            unlockMessage.classList.add(
                "show-unlock-message"
            );

        },
        2500
    );


    setTimeout(
        () => {

            comeInside.classList.add(
                "show-come-inside"
            );

        },
        5100
    );


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

        enterWorld.textContent =
            "The garden is waking...";

        gardenCreatures.classList.add(
            "garden-active"
        );

        setTimeout(() => {

            showTulipGarden();

        }, 1800);

    }
);

/* =====================================================
   CREATE GARDEN
===================================================== */

function createGarden() {

    gardenCreatures.innerHTML = "";

    createButterflies();

    createFireflies();

    createTulips();

}


/* =====================================================
   CREATE TULIPS
===================================================== */

function createTulips() {

    tulipContainer.innerHTML = "";


    tulips.forEach(
        (tulip, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "tulip";


            button.type =
                "button";


            button.dataset.index =
                index;


            /* -----------------------------------------
               IMAGE
            ----------------------------------------- */

            const image =
                document.createElement(
                    "img"
                );


            image.src =
                tulip.image;


            image.alt =
                `Secret tulip ${index + 1}`;


            /* -----------------------------------------
               IMAGE ERROR CHECK
            ----------------------------------------- */

            image.onerror =
                function() {

                    console.error(
                        `Could not load ${tulip.image}`
                    );

                    this.alt =
                        `Missing ${tulip.image}`;

                };


            button.appendChild(
                image
            );


            /* -----------------------------------------
               LABEL
            ----------------------------------------- */

            const label =
                document.createElement(
                    "span"
                );


            label.className =
                "tulip-label";


            label.textContent =
                "open me ✦";


            button.appendChild(
                label
            );


            /* -----------------------------------------
               CLICK
            ----------------------------------------- */

            button.addEventListener(
                "click",
                () => {

                    openVideo(index);

                }
            );


            tulipContainer.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   OPEN VIDEO
===================================================== */

function openVideo(index) {

    currentVideo = index;


    const tulip =
        tulips[index];


    /*
        Set video.
    */

    videoSource.src =
        tulip.video;


    /*
        Tell browser to reload
        the new video source.
    */

    secretVideo.load();


    /*
        Set message immediately.
    */

    videoMessage.textContent =
        tulip.message;


    /*
        Show popup.
    */

    videoOverlay.classList.add(
        "visible"
    );


    /*
        Try to start video.
    */

    secretVideo.play().catch(
        () => {

            /*
                Browser may block
                autoplay.

                The controls will still
                allow the user to press play.
            */

        }
    );

}


/* =====================================================
   VIDEO ENDED
===================================================== */

secretVideo.addEventListener(
    "ended",
    () => {

        markVideoWatched();

    }
);


/* =====================================================
   MARK VIDEO WATCHED
===================================================== */

function markVideoWatched() {

    /*
        Don't count the same video twice.
    */

    const tulipButtons =
        document.querySelectorAll(
            ".tulip"
        );


    const button =
        tulipButtons[currentVideo];


    if (
        button &&
        button.dataset.watched === "true"
    ) {

        return;

    }


    if (button) {

        button.dataset.watched =
            "true";

    }


    videosWatched++;


    /*
        Change instruction.
    */

    if (
        videosWatched <
        tulips.length
    ) {

        tulipInstruction.textContent =
            `${videosWatched} of 6 little secrets discovered ✦`;

    } else {

        tulipInstruction.textContent =
            "You found them all... ♡";

    }


    /*
        If all six videos
        have been watched,
        prepare final page.
    */

    if (
        videosWatched ===
        tulips.length
    ) {

        setTimeout(
            () => {

                closeVideoPopup();

                setTimeout(
                    showFinalPage,
                    700
                );

            },
            1800
        );

    }

}


/* =====================================================
   CLOSE VIDEO
===================================================== */

closeVideo.addEventListener(
    "click",
    closeVideoPopup
);


/* =====================================================
   CLICK OUTSIDE VIDEO
===================================================== */

videoOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            videoOverlay
        ) {

            closeVideoPopup();

        }

    }
);


/* =====================================================
   CLOSE VIDEO FUNCTION
===================================================== */

function closeVideoPopup() {

    secretVideo.pause();

    videoOverlay.classList.remove(
        "visible"
    );

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeVideoPopup();

        }

    }
);


/* =====================================================
   FINAL PAGE
===================================================== */

function showFinalPage() {

    finalPage.classList.add(
        "visible"
    );

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
            document.createElement(
                "div"
            );


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
            document.createElement(
                "div"
            );


        leftWing.className =
            "butterfly-wing left";


        const rightWing =
            document.createElement(
                "div"
            );


        rightWing.className =
            "butterfly-wing right";


        const body =
            document.createElement(
                "div"
            );


        body.className =
            "butterfly-body";


        const leftAntenna =
            document.createElement(
                "div"
            );


        leftAntenna.className =
            "antenna left";


        const rightAntenna =
            document.createElement(
                "div"
            );


        rightAntenna.className =
            "antenna right";


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


        gardenCreatures.appendChild(
            butterfly
        );

    }

}


/* =====================================================
   FIREFLIES
===================================================== */

function createFireflies() {

    const amount = 10;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const firefly =
            document.createElement(
                "div"
            );


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


        firefly.style.scale =
            random(.8, 1.35);


        gardenCreatures.appendChild(
            firefly
        );

    }

}

/* =====================================================
   TULIP GARDEN
===================================================== */

const tulipGarden =
    document.getElementById("tulipGarden");

const tulipCards =
    document.querySelectorAll(".tulip-card");

const videoPopup =
    document.getElementById("videoPopup");

const memoryVideo =
    document.getElementById("memoryVideo");

const videoMessage =
    document.getElementById("videoMessage");

const closeVideo =
    document.getElementById("closeVideo");

const tulipProgress =
    document.getElementById("tulipProgress");

const finalPage =
    document.getElementById("finalPage");


let tulipsDiscovered = 0;

const discoveredTulips =
    new Set();


/* =====================================================
   SHOW TULIP GARDEN
===================================================== */

function showTulipGarden() {

    tulipGarden.classList.add("visible");

}


/* =====================================================
   CLICK TULIP
===================================================== */

tulipCards.forEach((tulip, index) => {

    tulip.addEventListener("click", () => {

        const videoFile =
            tulip.dataset.video;

        const message =
            tulip.dataset.message;


        /* ---------------------------------------------
           LOAD VIDEO
        --------------------------------------------- */

        memoryVideo.src =
            "./" + videoFile;


        memoryVideo.load();


        /* ---------------------------------------------
           MESSAGE
        --------------------------------------------- */

        videoMessage.textContent =
            message;


        /* ---------------------------------------------
           SHOW POPUP
        --------------------------------------------- */

        videoPopup.classList.add("show");


        /* ---------------------------------------------
           MARK DISCOVERED
        --------------------------------------------- */

        if (
            !discoveredTulips.has(index)
        ) {

            discoveredTulips.add(index);

            tulipsDiscovered++;

            tulip.classList.add(
                "discovered"
            );


            tulipProgress.textContent =
                `${tulipsDiscovered} / 6 discovered`;

        }


        /* ---------------------------------------------
           PLAY
        --------------------------------------------- */

        memoryVideo.play().catch(() => {});

    });

});


/* =====================================================
   CLOSE VIDEO
===================================================== */

function closeMemoryVideo() {

    memoryVideo.pause();

    memoryVideo.currentTime = 0;

    memoryVideo.removeAttribute("src");

    memoryVideo.load();

    videoPopup.classList.remove("show");


    /*
        If all six have been discovered,
        show final page after closing.
    */

    if (
        tulipsDiscovered === 6
    ) {

        setTimeout(() => {

            tulipGarden.classList.remove(
                "visible"
            );

            finalPage.classList.add(
                "visible"
            );

        }, 600);

    }

}


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
            event.target === videoPopup
        ) {

            closeMemoryVideo();

        }

    }
);


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