
let tentativas = 0;

let contador = document.getElementById("contador");
let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    tentativas = tentativas + 1;
    contador.textContent = tentativas;

    if (tentativas >= 10) {
        mensagem.textContent = "Desiste kkkk 😂";
    } else if (tentativas >= 5) {
        mensagem.textContent = "Tu ainda estás tentando? kkk";
    } else {
        mensagem.textContent = "Tenta de novo!";
    }
});
botao.addEventListener("mouseover", function() {
    let x = Math.random() * 300;
    let y = Math.random() * 200;

    botao.style.position = "absolute";
    botao.style.left = x + "px";
    botao.style.top = y + "px";
});

