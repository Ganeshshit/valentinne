const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

window.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const rect = noBtn.getBoundingClientRect();

    const dist = Math.hypot(
        touch.clientX - (rect.left + rect.width / 2),
        touch.clientY - (rect.top + rect.height / 2)
    );

    if (dist < 120) {
        moveNoButton();
    }
});

tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    particles: {
        number: { value: 20 },
        shape: {
            type: "image",
            image: {
                src: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
                width: 32,
                height: 32
            }
        },
        size: { value: 20 },
        move: {
            enable: true,
            speed: 1,
            direction: "top",
            outModes: { default: "out" }
        },
        opacity: { value: 0.7 }
    }
});

function fireConfetti() {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    fireConfetti();
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});