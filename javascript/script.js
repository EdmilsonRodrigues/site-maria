var art = window.document.querySelector("article#a-redes")
var sec = window.document.querySelector("section#redes")
var span = window.document.querySelector("div#div-redes")
var iredes = window.document.querySelector("span#sp-redes")
var back = window.document.querySelector("div#display")

function mostrarRedes() {
    if (art.style.display == 'none') {
        art.style.display = 'block';
        sec.style = "width:200px";
        sec.style = "left: calc(100vw - 200px)";
        span.style = "left: calc(100vw - 248px)";
        back.style.backgroundColor = '#0000004d';
        iredes.innerHTML = 'close'
    } else {
        art.style.display = 'none';
        sec.style = "width:5vw";
        sec.style = "left:90vw";
        span.style = "left: 90vw";
        back.style.backgroundColor = '#ffffff00';
        iredes.innerHTML = 'public';
    }
}

function ajusteDisplay() {
    back.style.backgroundColor = '#ffffff00';
    if (window.innerWidth < 768) {
        art.style.display = 'none';
        span.style.display = 'block';
        sec.style = "width:45vw";
        sec.style = "left:90vw";
        iredes.innerHTML = 'public'
        span.style = "left: calc(100vw - 50px)"
    } else {
        art.style.display = 'block';
        span.style.display = 'none';
        sec.style = 'width:25vw;';
        sec.style = 'left: 75vw';
    }
}

function animacaoRedes() {
    window.alert(sec.style.width)
}