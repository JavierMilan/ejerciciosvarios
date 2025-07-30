function sumar(){
    let numero1 = Number(document.getElementById("numeroA").value);
    let numero2 = Number(document.getElementById("numeroB").value);

    let resultado = document.getElementById("resultado").textContent = numero1 + numero2;
}


function parOInpar(){
    let numerito = Number(document.getElementById("numeroCualquiera").value);
    if(numerito % 2 === 0){
        let resultaQue = document.getElementById("resultaQue").textContent = "El numero es Par"
    }else{
        let resultaQue = document.getElementById("resultaQue").textContent = "El numero es Impar"
    }
}

function mayorOMenor(){
    let numeroX = Number(document.getElementById("numeroX").value);
    let numeroZ = Number(document.getElementById("numeroZ").value);
    
    if(numeroX > numeroZ){
        let resultadoMayorMenor = document.getElementById("resultaMayor").textContent = "El primer numero es mayor que el segundo"
    }else if(numeroX === numeroZ){
        let resultadoMayorMenor = document.getElementById("resultaMayor").textContent = "ambos son iguales"
    }else{
        let resultaMayor = document.getElementById("resultaMayor").textContent = "El segundo numero es mayor que el primero"    
    }
    
}