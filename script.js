function converterparabinario(){
   let decimal =  parseInt(document.getElementById("decimalinput").value); /*pareint converte string em numero int*/


if (decimal >= 0 && decimal <= 255) {
    let binario = decimal.toString(2).padStart(8, '0'); /* tosrting converte numero para string e o padstart completa um texto com caracter a esquerda*/
    document.getElementById("resultado").innerText = binario;
} else {
    alert("insira um número decimal entre 0 e 255");
}
}

function validateBinary(binario) {
    if (!/^[0-1]{8}$/.test(binario)) {
        alert("Insira um binário válido de 8 bits");
        return false;
    }
    return true;
}

function addbinario(){
    let binario1 = document.getElementById("binario1").value;
    let binario2 = document.getElementById("binario2").value;

    if (validateBinary(binario1) && validateBinary(binario2)){
        let sum = (parseInt(binario1, 2) + parseInt(binario2, 2)).toString(2).padStart(8,'0');
        document.getElementById("resultado").innerText = sum;
    }
}

function subtrairBinario(){
    let binario1 = document.getElementById("binario1").value;
    let binario2 = document.getElementById("binario2").value;

    if(validateBinary(binario1) && validateBinary(binario2)) {
        let diff = (parseInt (binario1, 2) - parseInt(binario2, 2)).toString(2).padStart(8, '0');
        document.getElementById("resultado").innerText = diff;
  }
 }

 function multiplicarBinario(){
    let binario1 = document.getElementById("binario1").value;
    let binario2 = document.getElementById("binario2").value;

    if (validateBinary(binario1) && validateBinary(binario2)){
        let product = (parseInt (binario1,2) * parseInt(binario2,2)).toString(2).padStart(8, '0');
        document.getElementById("resultado").innerText = product;
    }
 }

 function dividirBinario(){
    let binario1 = document.getElementById("binario1").value;
    let binario2 = document.getElementById("binario2").value;

    if (validateBinary(binario1) && validateBinary(binario2) && parseInt(binario2,2) !==0) /*verificar se o divisor não é 0*/ {
        let = quotient = (Math.floor(parseInt(binario1, 2) / parseInt(binario2, 2))).toString(2).padStart(8, '0');
        document.getElementById("resultado").innerText = quotient;
        
    } else {
        alert("Divisão por zero ou entrada inválida");
    }
 }

function converterparacomplementode2() {
    let bin = document.getElementById("binario1").value;

    if (validateBinary(bin)) {
        // Inverter bits manualmente
        let invertido = '';
        for (let i = 0; i < bin.length; i++) {
            invertido += bin[i] === '0' ? '1' : '0'; //inverte os bit
        }

        // Somar 1 ao resultado
        let complemento = (parseInt(invertido, 2) + 1).toString(2).padStart(8, '0');

        document.getElementById("resultado").innerText = complemento;
    }
}

 function converterparahexouocta() {
    let binario = document.getElementById("binario1").value;

    if(validateBinary(binario)) {
        let dec = parseInt(binario, 2);
        let hex = dec.toString(16).toUpperCase();
        let oct = dec.toString(8);

        document.getElementById("resultado").innerText = `Hex: ${hex}, Oct: ${oct}`;
    }

 }
  