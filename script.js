const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");

const text = `Maricota,

Eu acredito que Deus escreve histórias que muitas vezes nós não conseguimos compreender no início. Entre tantas pessoas no mundo, Ele permitiu que nossos caminhos se encontrassem, e desde então meus dias ficaram mais felizes.

Desde o dia em que começamos, cada conversa com você se tornou especial. Você trouxe alegria, paz e uma vontade enorme de construir algo bonito.

Quando penso no futuro, penso em sonhos, momentos simples, risadas, desafios vencidos juntos e em alguém que eu gostaria de ter ao meu lado em cada um desses capítulos. E essa pessoa é você.

Obrigado por existir, por ser tão especial e por fazer parte da minha vida.

Com amor,
Lucas ❤️`;

setTimeout(() => {
    rain();

    setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";
        typeLetter();
    }, 3000);

}, 3000);

function rain() {

    setInterval(() => {

        const h = document.createElement("div");

        h.className = "heart";

        h.innerHTML = "❤️";

        h.style.left = Math.random() * 100 + "vw";

        h.style.bottom = "-20px";

        h.style.fontSize =
            (20 + Math.random() * 30) + "px";

        document.body.appendChild(h);

        setTimeout(() => h.remove(), 5000);

    }, 150);

}

function typeLetter() {

    let i = 0;

    const el = document.getElementById("letter");

    const t = setInterval(() => {

        el.innerHTML += text[i] || "";

        i++;

        if (i >= text.length)
            clearInterval(t);

    }, 25);

}

/* CONTADOR DE VISITAS LOCAL */

let visits =
    parseInt(localStorage.getItem("visits") || 0) + 1;

localStorage.setItem("visits", visits);

document.getElementById("visitCount").innerText =
    visits;

/* CONTADOR DESDE 25 DE MAIO */

function updateTime() {

    const start =
        new Date("2026-05-25T00:00:00");

    const now =
        new Date();

    let diff =
        now - start;

    let days =
        Math.floor(diff / 86400000);

    let hours =
        Math.floor(
            (diff % 86400000) / 3600000
        );

    document.getElementById("timeTogether").innerText =
        `${days} dias e ${hours} horas desde que começamos a conversar.`;

}

updateTime();

/* BOTÃO NÃO FUGINDO */

const noBtn =
    document.getElementById("noBtn");

function move() {

    noBtn.style.left =
        Math.random() * 300 + "px";

    noBtn.style.top =
        Math.random() * 120 + "px";

}

noBtn.addEventListener(
    "mouseenter",
    move
);

noBtn.addEventListener(
    "touchstart",
    move
);

/* BOTÃO SIM */

document.getElementById("yesBtn").onclick = () => {

    document.getElementById("result").innerHTML =
        "❤️ Pois será de hoje e para sempre. ❤️";

    for (let i = 0; i < 80; i++) {
        setTimeout(rain, i * 20);
    }

    setTimeout(() => {

        window.location.href =
            "https://wa.me/5591989958065?text=Eu%20aceito%20❤️";

    }, 3000);

};