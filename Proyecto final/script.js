function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake"); 
    snowflake.textContent = "❄";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);



function countdownToChristmas() {
    const christmasDate = new Date("December 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = christmasDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").textContent = 
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    if (difference < 0) {
        document.getElementById("timer").textContent = "¡Feliz Navidad! 🎄";
    }
}

setInterval(countdownToChristmas, 1000);
