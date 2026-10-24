
let jogador = document.getElementById("jogador");
let alvo = document.getElementById("alvo");
let pontosTexto = document.getElementById("pontos");

let x = 20;
let y = 20;
let pontos = 0;

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowUp") {
        y = y - 10;
    }

    if (event.key == "ArrowDown") {
        y = y + 10;
    }

    if (event.key == "ArrowLeft") {
        x = x - 10;
    }

    if (event.key == "ArrowRight") {
        x = x + 10;
    }

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > 475) x = 475;
    if (y > 275) y = 275;

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";

    verificar();
});

function verificar() {
    let ax = alvo.offsetLeft;
    let ay = alvo.offsetTop;

    if (Math.abs(x - ax) < 25 && Math.abs(y - ay) < 25) {
        pontos++;
        pontosTexto.textContent = pontos;

        alvo.style.left = Math.random() * 475 + "px";
        alvo.style.top = Math.random() * 275 + "px";
    }
}

function reiniciar() {
    x = 20;
    y = 20;
    pontos = 0;

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";

    pontosTexto.textContent = pontos;

    alvo.style.left = "400px";
    alvo.style.top = "200px";
}
