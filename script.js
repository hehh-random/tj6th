/* =====================================================
   GARDEN PAGE
===================================================== */

.garden-page {

    position: fixed;

    inset: 0;

    z-index: 200;

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    overflow: hidden;

    background:
        linear-gradient(
            rgba(255, 241, 198, .12),
            rgba(255, 241, 198, .12)
        ),
        url("background22.png");

    background-size: cover;
    background-position: center;

    transition:
        opacity 1.5s ease,
        visibility 1.5s ease;

}


.garden-page.visible {

    opacity: 1;

    visibility: visible;

    pointer-events: auto;

}


/* =====================================================
   GARDEN CREATURES
===================================================== */

#gardenCreatures {

    position: absolute;

    inset: 0;

    z-index: 1;

    overflow: hidden;

    pointer-events: none;

}


/* =====================================================
   GARDEN TITLE
===================================================== */

.garden-title {

    position: absolute;

    top: 8%;

    left: 50%;

    transform: translateX(-50%);

    width: 90%;

    text-align: center;

    z-index: 10;

}


.garden-title p {

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 5px;

    color: #8b5c13;

    margin-bottom: 12px;

}


.garden-title h2 {

    font-family: Georgia, serif;

    font-size: 39px;

    font-weight: 400;

    font-style: italic;

    color: #68440b;

}


.garden-title span {

    display: block;

    margin-top: 12px;

    font-family: Arial, sans-serif;

    font-size: 14px;

    color: #916a25;

}


/* =====================================================
   TULIP CONTAINER
===================================================== */

.tulip-container {

    position: absolute;

    left: 50%;

    top: 53%;

    transform: translate(-50%, -50%);

    width: min(900px, 90vw);

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 35px;

    justify-items: center;

    z-index: 20;

}


/* =====================================================
   TULIP
===================================================== */

.tulip {

    position: relative;

    width: 180px;

    height: 230px;

    border: none;

    padding: 0;

    background: transparent;

    cursor: pointer;

    transition:
        transform .35s ease,
        filter .35s ease;

    animation:
        tulipFloat
        4s
        ease-in-out
        infinite;

}


.tulip:nth-child(2) {
    animation-delay: .5s;
}

.tulip:nth-child(3) {
    animation-delay: 1s;
}

.tulip:nth-child(4) {
    animation-delay: 1.5s;
}

.tulip:nth-child(5) {
    animation-delay: 2s;
}

.tulip:nth-child(6) {
    animation-delay: 2.5s;
}


.tulip:hover {

    transform:
        translateY(-10px)
        scale(1.06);

    filter:
        drop-shadow(
            0 10px 18px rgba(105, 62, 8, .25)
        );

}


/* =====================================================
   ACTUAL TULIP IMAGE
===================================================== */

.tulip img {

    width: 100%;

    height: 100%;

    object-fit: contain;

    display: block;

    pointer-events: none;

}


/* =====================================================
   TULIP LABEL
===================================================== */

.tulip-label {

    position: absolute;

    left: 50%;

    bottom: 2px;

    transform: translateX(-50%);

    padding: 6px 13px;

    border-radius: 20px;

    background:
        rgba(61, 35, 5, .75);

    color: #fff0bd;

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 1px;

    opacity: 0;

    transition:
        opacity .3s ease;

    pointer-events: none;

}


.tulip:hover .tulip-label {

    opacity: 1;

}


/* =====================================================
   TULIP INSTRUCTION
===================================================== */

.tulip-instruction {

    position: absolute;

    bottom: 6%;

    left: 50%;

    transform: translateX(-50%);

    z-index: 30;

    width: 90%;

    text-align: center;

    font-family: Arial, sans-serif;

    font-size: 13px;

    color: #876126;

    letter-spacing: .5px;

}


/* =====================================================
   TULIP FLOAT
===================================================== */

@keyframes tulipFloat {

    0%,
    100% {

        transform:
            translateY(0);

    }

    50% {

        transform:
            translateY(-8px);

    }

}


/* =====================================================
   VIDEO OVERLAY
===================================================== */

.video-overlay {

    position: fixed;

    inset: 0;

    z-index: 1000;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 25px;

    background:
        rgba(22, 12, 2, .78);

    backdrop-filter:
        blur(12px);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transition:
        opacity .4s ease,
        visibility .4s ease;

}


.video-overlay.visible {

    opacity: 1;

    visibility: visible;

    pointer-events: auto;

}


/* =====================================================
   VIDEO BOX
===================================================== */

.video-box {

    position: relative;

    width: min(720px, 92vw);

    padding: 24px;

    border-radius: 25px;

    background:
        linear-gradient(
            145deg,
            #fff8df,
            #f2d998
        );

    border:
        1px solid rgba(155, 105, 17, .35);

    box-shadow:
        0 25px 80px rgba(0,0,0,.55);

    transform:
        scale(.9)
        translateY(20px);

    transition:
        transform .45s ease;

}


.video-overlay.visible .video-box {

    transform:
        scale(1)
        translateY(0);

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

.close-video {

    position: absolute;

    right: 12px;

    top: 10px;

    width: 38px;

    height: 38px;

    border: none;

    border-radius: 50%;

    background:
        rgba(76, 45, 5, .85);

    color: #fff4cb;

    font-size: 25px;

    line-height: 1;

    cursor: pointer;

    z-index: 10;

    transition:
        transform .2s ease;

}


.close-video:hover {

    transform:
        rotate(90deg)
        scale(1.05);

}


/* =====================================================
   VIDEO
===================================================== */

#secretVideo {

    width: 100%;

    max-height: 62vh;

    display: block;

    border-radius: 16px;

    background: #1b1004;

}


/* =====================================================
   VIDEO TOP SPARKLE
===================================================== */

.video-flower {

    text-align: center;

    color: #b57b18;

    font-size: 24px;

    margin-bottom: 8px;

}


/* =====================================================
   VIDEO MESSAGE
===================================================== */

.video-message {

    margin:

        18px
        10px
        4px;

    text-align: center;

    min-height: 25px;

    font-family:
        Georgia,
        serif;

    font-size: 17px;

    font-style: italic;

    line-height: 1.5;

    color: #704a0d;

}


/* =====================================================
   FINAL PAGE
===================================================== */

.final-page {

    position: fixed;

    inset: 0;

    z-index: 2000;

    display: flex;

    justify-content: center;

    align-items: center;

    text-align: center;

    background:
        radial-gradient(
            circle at center,
            rgba(255,248,218,.96),
            rgba(240,211,145,.96)
        );

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transform:
        scale(1.05);

    transition:
        opacity 1.8s ease,
        transform 2s ease,
        visibility 1.8s ease;

}


.final-page.visible {

    opacity: 1;

    visibility: visible;

    pointer-events: auto;

    transform:
        scale(1);

}


.final-content {

    max-width: 650px;

    padding: 35px;

}


.final-sparkle {

    font-size: 40px;

    color: #b77c16;

    margin-bottom: 18px;

    animation:
        finalSparkle
        2s
        ease-in-out
        infinite;

}


.final-small {

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 5px;

    color: #a37529;

    margin-bottom: 18px;

}


.final-content h2 {

    font-size: 45px;

    line-height: 1.2;

    font-weight: 400;

    font-style: italic;

    color: #704a0c;

}


.final-message {

    margin-top: 24px;

    font-family: Arial, sans-serif;

    font-size: 15px;

    line-height: 1.7;

    color: #916d2c;

}


.final-heart {

    margin-top: 25px;

    font-size: 32px;

    color: #b47b16;

}


@keyframes finalSparkle {

    0%,
    100% {

        transform:
            scale(1);

        opacity: .7;

    }

    50% {

        transform:
            scale(1.18);

        opacity: 1;

    }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 650px) {

    .garden-title {

        top: 7%;

    }


    .garden-title h2 {

        font-size: 30px;

    }


    .garden-title span {

        font-size: 12px;

    }


    .tulip-container {

        top: 52%;

        width: 94vw;

        grid-template-columns:
            repeat(2, 1fr);

        gap: 12px;

    }


    .tulip {

        width: 145px;

        height: 180px;

    }


    .tulip-instruction {

        bottom: 4%;

        font-size: 11px;

    }


    .video-box {

        padding: 15px;

        border-radius: 20px;

    }


    .final-content h2 {

        font-size: 34px;

    }

}