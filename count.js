document.addEventListener("DOMContentLoaded", function () {

    let count = 0;
    let started = false;
    let imageIndex = 0;

    const images = [
        "cool.jpg",
        "cool2.jpg",
        "cool3.jpg",
        "cool4.jpg",
        "cool5.jpg"
    ];

    const image = document.getElementById("main-image");
    const countDisplay = document.getElementById("count-display");
    const numberDisplay = document.getElementById("number");
    const title = document.querySelector("h1");
    const subtitle = document.querySelector("h2");

    countDisplay.style.display = "none";

    function handleCount() {
        if (!started) {
            title.style.display = "none";
            subtitle.style.display = "none";
            countDisplay.style.display = "flex";
            started = true;
        }

        count++;
        numberDisplay.textContent = count;
        vibrate();

        imageIndex = (imageIndex + 1) % images.length;
        image.src = images[imageIndex];
    }

    document.addEventListener("keydown", function (event) {
        if (event.code !== "Space") return;
        event.preventDefault();
        handleCount();
    });

    document.addEventListener("touchstart", handleCount);

    function vibrate() {
        if ("vibrate" in navigator) {
            navigator.vibrate(50);
        }
    }
});
