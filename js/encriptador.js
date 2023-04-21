

function btnEncriptar() {
    document.getElementById('msj').style.display = 'none';
    document.getElementById('output').style.display = 'block';
    var texto = document.querySelector(".text-area").value;
    var encriptado = texto.replace (/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".output-text").value = encriptado;
    elem = document.querySelector(".output-text");
    elem.style.background = "white";
}

function btnDesencriptar() {
    document.getElementById('msj').style.display = 'none';
    document.getElementById('output').style.display = 'block';
    var texto1 = document.querySelector(".text-area").value;
    var encriptado = texto1.replace (/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".output-text").value = encriptado;
}

function copyToClipBoard() {
    var content = document.getElementById('textArea');
    content.select();
    document.execCommand('copy');
}

function ocultar(){
    document.getElementById('msj').style.display = 'none';
}
