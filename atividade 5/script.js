function maior() {
    let numero1;
    let numero2;

    numero1 = Number(prompt("Digite o primeiro número:"));
    numero1 = Number(prompt("Digite o segundo número:"));

    if(numero1 > numero2){
        alert("O número" + numero1 + " é maior que o número" + numero2 + ".");
    }else if(numero1 < numero2){
        alert("O número" + numero2 + " é maior que o número" + numero1 + ".");
    }
}