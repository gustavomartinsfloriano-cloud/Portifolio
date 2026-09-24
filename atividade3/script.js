let nota1trim; 
let nota2trim; 
let resultado; 

function calcular() { 
    nota1trim = Number(prompt("Digite a nota do primeiro trimestre:")); 
    nota2trim = Number(prompt("Digite a nota do segundo trimestre:")); 
    
    resultado = 180 -(nota1trim + nota2trim);
    
    if(resultado <= 0){
        alert("parabéns! você esta aprovado.")
    } else{
        alert("Você ainda precisa tirar " + resultado + " no terceiro trimestre")
    }
}
