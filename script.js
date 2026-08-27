/* =====================================================
   SECRET CODE
===================================================== */

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

const gardenCreatures =
    document.getElementById("gardenCreatures");

const finalMessagePage =
    document.getElementById("finalMessagePage");


/* =====================================================
   STATE — LOCK
===================================================== */

let enteredCode = "";

let isUnlocking = false;


/* =====================================================
   STATE — GARDEN
===================================================== */

let videosWatched = 0;

const TOTAL_VIDEOS = 6;


/* =====================================================
   SECRET / VIDEO MESSAGES
===================================================== */

/*
    Change these messages to whatever you want.

    Message 0 = Tulip 1
    Message 1 = Tulip 2
    etc.
*/

const videoMessages = [

    "A little moment just for you. ♡",

    "I hope this made you smile, even just a little.",

    "Some memories deserve their own little place. ✦",

    "Here's another tiny piece of something special. ♡",

    "Just a little reminder to keep this moment close.",

    "And one last little thing... ✦"

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
        Automatically check code
        when all digits are entered.
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
        Reset after short delay.
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
        Start unlocking animation.
    */

    lockScreen.classList.add(
        "unlocking"
    );


    /*
        Create magical particles.
    */

    createParticles();


    /* =================================================
       MESSAGE 1
    ================================================= */

    setTimeout(() => {

        unlockMessage.classList.add(
            "show-unlock-message"
        );

    }, 2500);


    /* =================================================
       MESSAGE 2
    ================================================= */

    setTimeout(() => {

        comeInside.classList.add(
            "show-come-inside"
        );

    }, 5100);


    /* =================================================
       SECRET WORLD
    ================================================= */

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
   RANDOM NUMBER
===================================================== */

function random(min, max) {

    return Math.random() *
        (max - min) + min;

}


/* =====================================================
   ENTER THE SECRET WORLD
===================================================== */

if (enterWorld) {

    enterWorld.addEventListener(
        "click",
        () => {

            enterWorld.textContent =
                "The garden is waking...";


            /*
                Reveal butterflies + fireflies.
            */

            gardenCreatures.classList.add(
                "garden-active"
            );


            /*
                Start / reveal tulips.
            */

            createTulipSystem();

        }
    );

}


/* =====================================================
   CREATE TULIP SYSTEM
===================================================== */

/*
    This function looks for your six tulips.

    Your HTML tulips should have:

        class="garden-tulip"

    and each one should have:

        data-video="video1.mp4"

    Example:

        <div
            class="garden-tulip"
            data-video="video1.mp4"
        ></div>

    The JavaScript automatically gives each
    tulip its matching message.
*/

function createTulipSystem() {

    const tulips =
        document.querySelectorAll(
            ".garden-tulip"
        );


    if (!tulips.length) {

        console.warn(
            "No .garden-tulip elements were found."
        );

        return;

    }


    tulips.forEach(
        (tulip, index) => {

            /*
                Prevent duplicate event listeners
                if the garden is entered again.
            */

            if (
                tulip.dataset.initialized ===
                "true"
            ) {

                return;

            }


            tulip.dataset.initialized =
                "true";


            /*
                Store which video this tulip uses.
            */

            tulip.dataset.videoIndex =
                index;


            /*
                Make tulip clickable.
            */

            tulip.addEventListener(
                "click",
                () => {

                    openVideo(
                        tulip,
                        index
                    );

                }
            );

        }
    );

}


/* =====================================================
   CREATE VIDEO POPUP
===================================================== */

function createVideoPopup() {

    /*
        Don't create it twice.
    */

    if (
        document.getElementById(
            "gardenVideoPopup"
        )
    ) {

        return;
    }


    const popup =
        document.createElement("div");


    popup.id =
        "gardenVideoPopup";


    popup.innerHTML = `

        <div class="video-popup-inner">

            <button
                class="video-close"
                id="videoClose"
                type="button"
                aria-label="Close video"
            >
                ×
            </button>

            <div class="video-wrapper">

                <video
                    id="gardenVideo"
                    controls
                    playsinline
                ></video>

            </div>

            <p
                id="videoMessage"
                class="video-message"
            ></p>

        </div>

    `;


    document.body.appendChild(
        popup
    );


    /*
        Close button.
    */

    const closeButton =
        document.getElementById(
            "videoClose"
        );


    closeButton.addEventListener(
        "click",
        closeVideo
    );


    /*
        Clicking the dark background
        also closes the popup.
    */

    popup.addEventListener(
        "click",
        event => {

            if (
                event.target === popup
            ) {

                closeVideo();

            }

        }
    );

}


/* =====================================================
   OPEN VIDEO
===================================================== */

function openVideo(
    tulip,
    index
) {

    /*
        Make sure popup exists.
    */

    createVideoPopup();


    const popup =
        document.getElementById(
            "gardenVideoPopup"
        );


    const video =
        document.getElementById(
            "gardenVideo"
        );


    const message =
        document.getElementById(
            "videoMessage"
        );


    /*
        Get video file from tulip.
    */

    const videoFile =
        tulip.dataset.video;


    if (!videoFile) {

        console.warn(
            "This tulip does not have a data-video attribute."
        );

        return;

    }


    /*
        Set video.
    */

    video.src =
        videoFile;


    /*
        Set matching message.
    */

    message.textContent =
        videoMessages[
            index % videoMessages.length
        ];


    /*
        Show popup.
    */

    popup.classList.add(
        "visible"
    );


    document.body.classList.add(
        "video-open"
    );


    /*
        Start video.
    */

    video.currentTime = 0;

    const playPromise =
        video.play();


    /*
        Some browsers may block
        automatic playback.

        Controls are still available.
    */

    if (
        playPromise !== undefined
    ) {

        playPromise.catch(() => {

            console.log(
                "Video requires user interaction to play."
            );

        });

    }


    /*
        IMPORTANT:

        Count the video only once.
    */

    if (
        tulip.dataset.watched !==
        "true"
    ) {

        tulip.dataset.watched =
            "true";


        videosWatched++;


        /*
            Visually mark the tulip
            as discovered.
        */

        tulip.classList.add(
            "watched"
        );


        updateVideoProgress();


        /*
            If all six have been watched,
            prepare final page.
        */

        if (
            videosWatched >=
            TOTAL_VIDEOS
        ) {

            allVideosWatched();

        }

    }

}


/* =====================================================
   CLOSE VIDEO
===================================================== */

function closeVideo() {

    const popup =
        document.getElementById(
            "gardenVideoPopup"
        );


    const video =
        document.getElementById(
            "gardenVideo"
        );


    if (!popup) {
        return;
    }


    /*
        Stop video.
    */

    if (video) {

        video.pause();

        video.currentTime = 0;

    }


    popup.classList.remove(
        "visible"
    );


    document.body.classList.remove(
        "video-open"
    );

}


/* =====================================================
   UPDATE VIDEO PROGRESS
===================================================== */

function updateVideoProgress() {

    /*
        Optional counter.

        If you have an element with:

            id="videoProgress"

        it will automatically show:

            1 / 6
            2 / 6
            etc.
    */

    const progress =
        document.getElementById(
            "videoProgress"
        );


    if (progress) {

        progress.textContent =
            `${videosWatched} / ${TOTAL_VIDEOS}`;

    }

}


/* =====================================================
   ALL VIDEOS WATCHED
===================================================== */

function allVideosWatched() {

    /*
        Don't show final page immediately.

        Let the sixth video finish being
        opened / viewed first.
    */

    setTimeout(() => {

        /*
            If the video is still open,
            close it first.
        */

        closeVideo();


        /*
            Wait a little so the garden
            has a moment to breathe.
        */

        setTimeout(() => {

            showFinalMessage();

        }, 1500);

    }, 500);

}


/* =====================================================
   SHOW FINAL MESSAGE
===================================================== */

function showFinalMessage() {

    if (!finalMessagePage) {

        console.warn(
            "Final message page was not found."
        );

        return;

    }


    /*
        Fade out the garden slightly.
    */

    gardenCreatures.style.transition =
        "opacity 2s ease";


    gardenCreatures.style.opacity =
        "0";


    /*
        Show final page.
    */

    setTimeout(() => {

        finalMessagePage.classList.add(
            "visible"
        );

    }, 700);

}


/* =====================================================
   OPTIONAL KEYBOARD SUPPORT
===================================================== */

/*
    Lets the user press numbers on the keyboard
    instead of clicking the keypad.
*/

document.addEventListener(
    "keydown",
    event => {

        if (isUnlocking) {
            return;
        }


        /*
            Number keys.
        */

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {

            addNumber(event.key);

        }


        /*
            Backspace.
        */

        if (
            event.key ===
            "Backspace"
        ) {

            enteredCode =
                enteredCode.slice(0, -1);

            updateDisplay();

        }

    }
);


/* =====================================================
   CREATE VIDEO POPUP WHEN PAGE LOADS
===================================================== */

/*
    We create the popup now,
    but it remains invisible until
    a tulip is clicked.
*/

createVideoPopup();